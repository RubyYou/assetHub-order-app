<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>追蹤車輛定位</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title> {{date}} </f7-block-title>
        <div class='button-group'>
            <f7-button class="device-btn"
                v-for = "tracker in trackers"
                @click = "setPathOnMap (tracker.deviceAddress)">
                {{ cutTextFromLastOne (tracker.deviceAddress) }}
            </f7-button>
        </div>
        <div id="map" :class="{hide: !isActive}"></div>
        <div :class="{hide: isActive}">
            <p> 今天無本裝置資料 </p>
        </div>
    </f7-page>
</template>

<script>

import { mapState } from 'vuex'
import TimeUtils from "../../utils/time-utils"
import store from '../../store/index'
import { SensorAPI } from '../../apis/'

const today = TimeUtils.substractDayToDBFormate(0);

export default {
    data: function () {
        return {
            date: TimeUtils.getDate(today),
            map: null,
            polyline: null,
            isActive: true
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
            console.log (key, path)

            if (path.length > 0) {
                this.isActive = true
                this.polyline = new google.maps.Polyline({
                    path: path,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 15
                });
                this.polyline.setMap(this.map);
            } else {
                this.polyline.setMap(null)
                this.isActive = false
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
}
#map {
    width: 95%;
    height: 400px;
    margin: 0 auto;
}
.hide {
    visibility:hidden;
}
</style>