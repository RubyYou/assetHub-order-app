<template>
    <f7-page data-page="checkIns">
    <!-- Need a coustom one as icon formate not support f7-icons -->
     <f7-toolbar tabbar bottom labels>
        <f7-link tab-link="#tab1" active>
            <i class="f7-icons">add_round_fill</i>
            <span class="tabbar-label">人員履歷</span>
        </f7-link>
        <f7-link tab-link="#tab2">
            <i class="f7-icons">add_round_fill</i>
            <span class="tabbar-label">車輛履歷</span>
        </f7-link>
        <f7-link tab-link="#tab3">
            <i class="f7-icons">document_text_fill</i>
            <span class="tabbar-label">建立卡片記錄</span>
        </f7-link>
        <f7-link tab-link="#tab4">
            <i class="f7-icons">check_round</i>
            <span class="tabbar-label">打卡記錄</span>
        </f7-link>
    </f7-toolbar>
    <div class="checkIn-wrap">
        <f7-tabs>
            <f7-tab id="tab1" active> <StaffProfile /> </f7-tab>
            <f7-tab id="tab2"><VehicleProfile /></f7-tab>
            <f7-tab id="tab3"><StaffMapping /></f7-tab>
            <f7-tab id="tab4"></f7-tab>
        </f7-tabs>
    </div>
    </f7-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import StaffProfile from './staff-profile.vue'
import VehicleProfile from './vehicle-profile.vue'
import StaffMapping from './staff-mapping.vue'

export default {
    name: "checkIns",
    components: {
        StaffProfile,
        VehicleProfile,
        StaffMapping
    }
}
</script>
<style lang="sass" scoped>
.checkIn-wrap{
    margin-top: 50px;
}
.toolbar-inner .tab-link .f7-icons{
    margin: 0 auto;
}
</style>
