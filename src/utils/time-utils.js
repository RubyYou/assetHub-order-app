import moment from 'moment'


export default class TimeUtils {

    static isSameAsToday (comparedEpoch)
    {
        const today = moment ().format('YYYY-MM-DD');
        const comparedDay = moment(new Date (comparedEpoch)).format('YYYY-MM-DD')
        return moment(today).isSame (comparedDay)
    }

    /**
     * formate: time
    */
    static getDate (epochTime) {
        const date = new Date (epochTime);
        const time = moment (date).format ('LL');
        const day = moment (date).format ('dddd');
        return time + " " + day ;
    }
}