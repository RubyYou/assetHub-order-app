<template>
    <f7-page data-page="profiles" class="profile-staff">
        <f7-block-title>人員履歷</f7-block-title>
        <div class="add" @click="togglePanel">
            <i v-if="mode==='normal'" class="f7-icons">add_round_fill</i>
            <i v-if="mode==='create'" class="f7-icons">delete_round_fill</i>
        </div>

        <!-- create profile -->
        <f7-list id="create-staff" v-if="mode==='create'" form>
            <f7-list-item>
                <f7-label>姓名</f7-label>
                <f7-input name="姓名" type="text" />
            </f7-list-item>
            <f7-list-item>
                <f7-label>公司名稱</f7-label>
                <f7-input name="公司名稱" type="text" />
            </f7-list-item>
            <f7-list-item>
                <f7-label>工作項目</f7-label>
                <select name="工作項目" >
                    <option value="水泥工">水泥工</option>
                    <option value="模板工">模板工</option>
                    <option value="打石工">打石工</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-label>血型</f7-label>
                <select name="血型" >
                    <option value="O">O</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                </select>
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="createProfile" fill>新建人員</f7-button>
            </f7-list-item>
        </f7-list>

        <f7-list form>
            <f7-list-item>

            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
export default {
    name: "Profile",
    data: function () {
        return {
            mode: "normal"
        }
    },
    computed: function () {

    },
    methods: {
        createProfile () {
            //TODO: add form validation
            const type = "staff"
            let info = this.$f7.formToData ('#create-staff')
            this.$store.dispatch ('createProfile', {type, info})
        },
        togglePanel () {
            const mode = this.mode === 'create' ? 'normal' : 'create'
            this.mode = mode
        }
    },
    beforeCreate () {

    }
}
</script>

<style lang="sass" scoped>
.profile-staff {
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
</style>