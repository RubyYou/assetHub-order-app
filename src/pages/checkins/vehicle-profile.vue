<template>
    <f7-page data-page="profiles" class="profile-vehicle">
        <f7-block-title>車輛履歷</f7-block-title>
        <div class="add" @click="togglePanel">
            <i v-if="mode==='normal'" class="f7-icons">add_round_fill</i>
            <i v-if="mode==='create'" class="f7-icons">delete_round_fill</i>
        </div>

        <!-- create profile -->
        <f7-list id="create-vehicle" v-if="mode==='create'" form>
            <f7-list-item>
                <f7-label>車輛編號</f7-label>
                <f7-input name="車輛編號" type="text" />
            </f7-list-item>
            <f7-list-item>
                <f7-label>公司名稱</f7-label>
                <f7-input name="公司名稱" type="text" />
            </f7-list-item>
            <f7-list-item>
                <f7-label>車種</f7-label>
                <select name="車種" >
                    <option value="起重機">起重機</option>
                    <option value="挖土機">挖土機</option>
                    <option value="吊機">吊機</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="createProfile" fill>新建車輛</f7-button>
            </f7-list-item>
        </f7-list>

        <f7-list class="vehicle-list" form>
            <f7-list-item v-for="vehicle in vehicles">
                <p><b>車輛編號: </b><br/> {{vehicle["車輛編號"]}}</p>
                <p><b>公司名稱: </b><br/>{{vehicle["公司名稱"]}}</p>
                <p><b>車種: </b><br/>{{vehicle["車種"]}}</p>
                <i class="f7-icons" @click="deleteProfile(vehicle.key)">delete_round_fill</i>
            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'

const type = "vehicle" //!IMPORTANT (vehicle creation)

export default {
    name: "vehicle-profile",
    data: function () {
        return {
            mode: "normal",
        }
    },
    computed: mapState ({
        vehicles: state => state.checkin.vehicle
    }),
    methods: {
        createProfile () {
            // TODO: add form validation
            let info = this.$f7.formToData ('#create-vehicle')
            this.$store.dispatch ('createProfile', {type, info})
        },
        deleteProfile (key) {
            this.$store.dispatch ('deleteProfile', {type, key})
        },
        togglePanel () {
            const mode = this.mode === 'create' ? 'normal' : 'create'
            this.mode = mode
        }
    }
}
</script>

<style lang="sass" scoped>
.profile-vehicle {
    margin-top: 30px;
}
.list-block {
    margin: 25px 0;
}
.add {
    position: absolute;
    top: 30px;
    right: 0;
    color: #ff6262;
}
.button.button-fill {
    width: 100%;
}
.vehicle-list {
    .item-inner{
        p {
            font-size: 12px;
            color: #929292;
        }
        i.f7-icons {
            color: #929292;
        }
    }
}
</style>