import moment from 'moment'


export default class TimeUtils {

    /**
     * get if this epoch day is same as Today
    */
    static isSameAsToday (comparedEpoch)
    {
        const today = moment ().format('YYYY-MM-DD');
        const comparedDay = moment(new Date (comparedEpoch)).format('YYYY-MM-DD')
        return moment(today).isSame (comparedDay)
    }

    /**
     * formate date in Local language
    */
    static getDate (date)
    {
        const time = moment (date).format ('LL');
        const day = moment (date).format ('dddd');
        return time + " " + day ;
    }

    /**
     * get consistent formate date compare from Today
    */
    static substractDayToDBFormate (substract)
    {
        console.assert (typeof substract === 'number')

        const day = moment ().subtract (substract, 'days').format('YYYY-MM-DD');
        const formate = day.split ("/").join ("-").toString ()

        return formate
    }

    static formateDateFromString (dateString)
    {
        var a = dateString.split(/[^0-9]/);
        var d = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
        //console.log(dateString + " " + d, new Date(d).getTime());
        return new Date(d).getTime()
    }

    static getClock(epochDate) {
        var d = new Date (epochDate);
        let min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
        let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
        return d.getHours() + ':' + min + ':' + sec;
    }
}