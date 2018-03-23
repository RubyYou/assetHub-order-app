<template>
    <f7-page data-page="checkIns">
        <div class="page-content">
            <f7-tabs swipeable>
                <f7-tab id="tab1">Tab 1 content...</f7-tab>
                <f7-tab id="tab2">Tab 2 content...</f7-tab>
                <f7-tab id="tab3">Tab 3 content...</f7-tab>
            </f7-tabs>
        </div>
        <f7-toolbar tabbar bottom labels>
            <f7-link icon="icon-1" text="Tab 1" tab-link="#tab1"></f7-link>
            <f7-link icon="icon-1" text="Tab 2" tab-link="#tab2"></f7-link>
            <f7-link icon="icon-1" text="Tab 3" tab-link="#tab3"></f7-link>
        </f7-toolbar>
    </f7-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: "checkIns",
    comments: {

    },
    data: function () {
        return {}
    },
    computed: mapState ({}),
    beforeCreate () {

    }
}
</script>
<style lang="sass">

</style>
