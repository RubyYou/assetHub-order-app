<template>
    <f7-page data-page="charts-water" class="charts-page">
        <f7-navbar>
            <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
            <f7-nav-center>人員安全帽追蹤</f7-nav-center>
        </f7-navbar>
        <br/><br/>
        <f7-block-title class="day-title">
            <f7-button @click="getSubstrackDayData(1)"> < </f7-button>
            <p>{{date}} </p>
            <f7-button @click="getSubstrackDayData(-1)"> > </f7-button>
        </f7-block-title>
        <div class='button-group'>
            <f7-button v-for="helmet in helmets"
                @click="selectHelmet (helmet.deviceAddress)"
                :class="renderClass (helmet.deviceAddress)">
                {{ cutTextFromLastOne(helmet.deviceAddress) }}
            </f7-button>
        </div>
        <div>
            <p class="text-center">安全帽傾斜角</p>
            <Angle
                :angles="selectedData.angles"
                :date="date"
            />
            <p class="text-center">人員體溫</p>
            <Temperature
                :temperatures="selectedData.temperatures"
                :date="date"
            />
            <p class="text-center"> 人員定位 </p>
            <MapWithPath
                :locations="selectedData.locations"
                :date="date"
            />
        </div>
    </f7-page>
</template>

<script>

import { mapState } from 'vuex'
import TimeUtils from "../../utils/time-utils"
import MapWithPath from '../../components/map-with-path.vue'
import Temperature from './temperature.vue'
import Angle from './angle.vue'
import moment from 'moment'

const today = TimeUtils.substractDayToDBFormate(0);

export default {
    components: {
        MapWithPath,
        Temperature,
        Angle
    },
    data: function () {
        return {
            date: TimeUtils.getDate (today),
            currentDevice: '0000000012345681',
            currentDayIndex : 0,
            selectedData: {
                locations: [],
                temperatures: [],
                angles: []
            }
        }
    },
    computed: {
        helmets () {
            return this.$store.state.sensor.helmets
        },
        helmetData () {
            return this.$store.state.sensor.helmetData
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
        getSubstrackDayData (substrackNumber) {
            console.assert (typeof substrackNumber === "number")
            const finalNumber = this.currentDayIndex + substrackNumber
            const fetchDate = TimeUtils.substractDayToDBFormate (finalNumber);
            this.currentDayIndex = finalNumber
            const payload = {
                date: fetchDate,
                type: 'helmet',
                callBack: () => { this.setDate (fetchDate)}
            }
            this.$store.dispatch ("getTrackingData", payload);
        },
        setDate (date) {
            this.date = TimeUtils.getDate(date)
            if (this.currentDevice) {
                this.selectHelmet(this.currentDevice)
            }
        },
        selectHelmet (key) {
            if (this.helmetData[key]) {
                this.selectedData = this.helmetData[key]
            } else {
                this.selectedData = {
                    locations: [],
                    temperatures: [],
                    angles: []
                }
            }
            this.currentDevice = key
            console.log (key, this.selectedData)
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
.data-group {
    margin: 20px;
}
.text-center {
    text-align: center;
}
</style>