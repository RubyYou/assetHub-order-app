<template>
  <f7-page data-page="employee">
    <f7-navbar >
      <f7-nav-left back-link="上一頁" sliding></f7-nav-left>
      <f7-nav-center>工人打卡</f7-nav-center>
    </f7-navbar>
    <f7-block class="checkIn">
      <div v-for="today in checkIns">
        <f7-block-title>{{renderDate (today.date)}}</f7-block-title>
        <f7-card class = "facebook-card" v-for="staff in today.employees"
          :title = "renderHeader (staff.name, staff.avatar)" 
          :content = "renderContent (staff.location, staff.job, staff.arrived)"
          :inner="true">
        </f7-card>
      </div>
    </f7-block>
  </f7-page>
</template>


<script>
import moment from 'moment';

export default {
  computed: {
    checkIns () {
      return this.$store.state.employees;
    }
  },
  methods: {
    renderHeader (name, avatarUrl) {
      const avatar = '<img class="avatar" src="'+ avatarUrl +'">';

      return avatar + name;
    },
    renderContent (location, job, epochTime) {

      const date = new Date (epochTime);
      const time = moment (date).format ('LLL');

      const locationHtml = '<p> 工作位置 : ' + location + '</p>';
      const jobHtml = '<p> 工作內容 : ' + job + '</p>';
      const timeHtml = '<p> 打卡時間 : ' + time + '</p>';

      return locationHtml + jobHtml + timeHtml;
    },
    renderDate (epochTime) 
    {
      const date = new Date (epochTime);
      const time = moment (date).format ('LL');
      const day = moment(date).format('dddd'); 
      const fromNow = moment(date).fromNow (); 

      return time + " " + day + " ( " + fromNow + " )";
    }
  }
}
</script>
<style>
.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 20px;
  border: 3px solid white;
  box-shadow: 1px 1px 7px #7b6565;
}
.checkIn .content-block-title {
  color: #ff5722;
}
.checkIn .card-header{
    background: #fd7621;
    color: white;
}
</style>