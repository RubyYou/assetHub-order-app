<template>
        <div class="map-wrap">
            <div id="map" :class="{hide: !isActive}"></div>
            <div :class="[{hide: isActive}, 'no-data']"> <p> 今天無本裝置資料 </p> </div>
        </div>
</template>

<script>

import { mapState } from 'vuex'
import TimeUtils from "../utils/time-utils"
import moment from 'moment'

const today = TimeUtils.substractDayToDBFormate(0);

export default {
    props: [
        'locations',
        'date'
    ],
    data: function () {
        return {
            map: null,
            polyline: null,
            marker: null,
            infowindow: null,
            isActive: true
        }
    },
    methods: {
        setPathOnMap () {
            if (this.locations.length > 0) {
                this.reset ()
                this.isActive = true
                this.polyline = new google.maps.Polyline({
                    path: this.locations, geodesic: true, strokeColor: '#FF0000',
                    strokeOpacity: 1.0, strokeWeight: 5
                });
                this.polyline.setMap (this.map);
                let finalLocation = this.locations[this.locations.length -1]
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
            if (this.locations.length > 0) {
                const finalLocation = this.locations[this.locations.length - 1]
                this.map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: {
                        lat: finalLocation.lat,
                        lng: finalLocation.lng
                    },
                    mapTypeId: 'terrain'
                });
                this.setPathOnMap ()
                this.addMarker (finalLocation)
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
        }
    },
    watch: {
        date: {
            handler (after, before) {
                this.initMap () // force it to deep update
            },
            deep: true
        }
    },
    mounted () {
        this.initMap()
    }
}
</script>
<style lang="sass" scoped>
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
    margin-bottom: 250px;
}
.no-data {
    position: absolute;
    top: 0;
    margin: 0 2.5%;
}
</style>