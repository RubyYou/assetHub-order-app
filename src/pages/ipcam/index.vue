
<template>
    <f7-page data-page="ipcam" >
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>IP CAM</f7-nav-center>
        </f7-navbar>
        <br/><br/><br/>
        <h3 class="title"> 觀看現場即時影像 <br/> 請填入IP位置 </h3>
        <f7-list form>
            <f7-list-item>
                <f7-label>IP 位置</f7-label>
                <f7-input type="text" v-model="ipLocation" /></f7-input>
            </f7-list-item>
        </f7-list>
        <iframe v-if="ipLocation.length > 0" :src="'http://' + ipLocation" width="100%" height="400px">
        </iframe>
    </f7-page>
</template>

<script>
//http://192.168.1.143:8181
export default {
    data: function () {
        return {
            ipLocation: ""
        }
    }
};
</script>

<style lang="sass" scoped>
.title {
    text-align: center;
    color: #60a6ca;
}
</style>