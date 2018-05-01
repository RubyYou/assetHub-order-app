
<template>
  <f7-page data-page="ipcam" >
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>IP CAM</f7-nav-center>
        </f7-navbar>
        <br/> <br/>
        <video id="test_video" controls autoplay :src="url"></video>
  </f7-page>
</template>


<script>
export default {
    data: function () {
        return {
            url : 'rtsp://192.168.1.88:554/user=admin&password=&channel=3&stream=1.sdp?'
        }
    },
    methods: {
        getIpcam () {
            // areaC:
            //'rtsp://42.76.246.214:554/user=admin&password=&channel=3&stream=1.sdp?'
            // rtsp://192.168.1.88:554/user=admin&password=&channel=1&stream=0.sdp? --> local
            // ? -->
            // http://192.168.1.88/Login.htm
        }
    },
    created () {
        console.log('ipcam started')
    }
};
</script>