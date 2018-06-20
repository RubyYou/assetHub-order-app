<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>追蹤車輛定位</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title class="day-title">
            <f7-button @click="getSubstrackDayData(1)"> < </f7-button>
            <p>{{date}} </p>
            <f7-button @click="getSubstrackDayData(-1)"> > </f7-button>
        </f7-block-title>
        <div class='button-group'>
            <f7-button v-for = "tracker in trackers"
                @click="setPathOnMap (tracker.deviceAddress)"
                :class="renderClass (tracker.deviceAddress)">
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
            currentDevice: '',
            currentDayIndex : 0
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
            if (path.length > 0) {
                this.reset ()
                this.isActive = true
                this.polyline = new google.maps.Polyline({
                    path: path, geodesic: true, strokeColor: '#FF0000',
                    strokeOpacity: 1.0, strokeWeight: 5
                });
                this.polyline.setMap (this.map);
                let finalLocation = this.locations[key][this.locations[key].length -1]
                this.addMarker (finalLocation)
            } else {
                this.isActive = false
            }
        },
        reset () {
            if (this.map && this.polyline) {
                this.polyline.setMap (null)
                this.marker.setMap (null);
                this.marker = null
            }
        },
        initMap () {
            const firstKey = Object.keys(this.locations)[0]
            if (firstKey) {
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
                //this.addMarker (finalLocation)
            } else {
                this.isActive = false
            }
        },
        addMarker (location) {
            const position = {lat: location.lat, lng: location.lng }
            const time = this.getTime (location.time)

            this.marker = new google.maps.Marker({
                position: position,
                map: this.map,
                title: 'hello',
                animation: google.maps.Animation.DROP
            });
            this.infowindow = new google.maps.InfoWindow({
                content: '<p>最後追蹤時間' + time + '</p><p> 經緯度'
                + location.lat + ','+ location.lng + '</p>'
            });
            this.marker.addListener('click', () => {
                this.map.setZoom (17);
                this.infowindow.open (this.map, this.marker);
            });
        },
        getTime (epoch) {
            const time = new Date (epoch)
            return moment(time).format('LTS')
        },
        getSubstrackDayData (substrackNumber) {
            console.assert (typeof substrackNumber === "number")
            const finalNumber = this.currentDayIndex + substrackNumber
            const fetchDate = TimeUtils.substractDayToDBFormate (finalNumber);
            this.currentDayIndex = finalNumber
            const payload = {
                date: fetchDate,
                type: 'tracker',
                callBack : this.initMap
            }
            this.$store.dispatch ("getTrackingData", payload);
            this.date = TimeUtils.getDate(fetchDate)
        }
    },
    mounted () {
        this.initMap()
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