<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>追蹤車輛定位</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title> {{date}} </f7-block-title>
        <div class='button-group'>
            <f7-button v-for = "tracker in trackers"
                @click="setPathOnMap(tracker.deviceAddress)"
                :class="renderClass(tracker.deviceAddress)">
                {{ cutTextFromLastOne(tracker.deviceAddress) }}
            </f7-button>
        </div>
        <div class="map-wrap">
            <div id="map" :class="{hide: !isActive}"></div>
            <div :class="[{hide: isActive}, 'no-data']"> <p> 今天無本裝置資料 </p> </div>
        </div>
    </f7-page>
</template>

<script>

import { mapState } from 'vuex'
import TimeUtils from "../../utils/time-utils"
import store from '../../store/index'
import { SensorAPI } from '../../apis/'
import moment from 'moment'

const today = TimeUtils.substractDayToDBFormate(0);

export default {
    data: function () {
        return {
            date: TimeUtils.getDate(today),
            map: null,
            polyline: null,
            marker: null,
            infowindow: null,
            isActive: true,
            currentDevice: ''
        }
    },
    computed: {
        trackers () {
            return this.$store.state.sensor.trackers
        },
        locations () {
            return this.$store.state.sensor.locations
        }
    },
    methods: {
        renderClass (deviceName) {
            const device = this.currentDevice == deviceName ? ' active' : ''
            return 'device-btn' + device
        },
        cutTextFromLastOne (text) {
            return text.substring (8, text.length)
        },
        getAllPath (key) {
            let results = []
            if (this.locations[key]) {
                this.locations[key].map (item => {
                    results.push ({lat: item.lat, lng: item.lng })
                })
            }
            return results
        },
        setPathOnMap (key) {
            const path = this.getAllPath (key)
            this.currentDevice = key
            this.resetLines ()
            if (path.length > 0) {
                this.isActive = true
                this.polyline = new google.maps.Polyline({
                    path: path, geodesic: true, strokeColor: '#FF0000',
                    strokeOpacity: 1.0, strokeWeight: 5
                });
                this.polyline.setMap (this.map);
            } else {
                this.isActive = false
            }
        },
        resetLines () {
            if (this.map && this.polyline) {
                this.polyline.setMap (null)
            }
        },
        initMap (firstKey) {
            const firstdevices = this.locations[firstKey]
            const finalLocation = firstdevices[firstdevices.length - 1]
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {
                    lat: finalLocation.lat,
                    lng: finalLocation.lng
                },
                mapTypeId: 'terrain'
            });
            this.setPathOnMap (firstKey)
            this.addMarker (finalLocation)
        },
        addMarker (location) {
            const position = {lat: location.lat, lng: location.lng }
            const time = this.getTime (location.time)

            this.marker = new google.maps.Marker({
                position: position, map: this.map, title: 'hello'
            });
            this.infowindow = new google.maps.InfoWindow({
                content: '<p>最後追蹤時間' + time + '</p><p> 經緯度'
                + location.lat + ','+ location.lng + '</p>'
            });
            this.marker.addListener('click', () => {
                this.infowindow.open (this.map, this.marker);
            });
        },
        getTime (epoch) {
            const time = new Date (epoch)
            return moment(time).format('LTS')
        }
    },
    mounted () {
        if (Object.keys(this.locations).length > 0) {
            const firstKey = Object.keys(this.locations)[0]
            this.initMap(firstKey)
        }
    }
}
</script>
<style lang="sass" scoped>
.button-group {
    margin-left: 5px;
}
.device-btn {
    display: inline-block;
    background: #4094ea;
    margin: 2px 8px;
    color: white;
    border: none;
    &.active {
        background: #ea5f40;
    }
}
#map {
    width: 95%;
    height: 400px;
    margin: 0 auto;
}
.hide {
    visibility:hidden;
}
.map-wrap {
    position:relative;
}
.no-data {
    position: absolute;
    top: 0;
    text-align: center;
    display: block;
    width: 95%;
    background: gainsboro;
    margin-left: 2.5%;
    margin-top: 5%;
}
</style>