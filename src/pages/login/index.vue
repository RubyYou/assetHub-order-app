<template>
  <div>
      <div v-if="errorMessage.length > 0" class="error">
          {{ errorMessage }}
          </div>
          <f7-list form ref="account-item">
              <f7-list-item >
                  <f7-label >帳號</f7-label>
                  <f7-input ref="account" type="select" v-model="accountValue">
                    <option v-for="info in accounts" :value="info.account">
                      {{ info.account }}
                    </option>
                  </f7-input>
              </f7-list-item>
              <f7-list-item >
                  <f7-label >密碼</f7-label>
                  <f7-input ref="password" type="password" placeholder="password" v-model="password"/>
              </f7-list-item>
          </f7-list>
          <h3 class="name-title">請選您的登入姓名</h3>
          <f7-list form ref="name-item">
                <f7-list-item>
                  <f7-label >姓名</f7-label>
                  <f7-input ref="username" type="select" v-model="defaultName">
                    <option v-for="staff in defaultStaff" :value="staff">
                      {{ staff }}
                    </option>
                  </f7-input>
                </f7-list-item>
            </f7-list>
      <f7-button fill @click="checkValidation"> 登入 </f7-button>
  </div>
</template>

<script>
import { MessageAPI, FormAPI, LoginAPI, CheckInAPI, SocketAPI, SensorAPI } from "../../apis/index";
import { mapState } from "vuex"

export default {
  props: {
    accounts: Array
  },
  data: function() {
    return {
      errorMessage: "",
      defaultName: '',
      accountValue: '',
      name: '',
      password: ''
    }
  },
  computed: mapState({
    defaultStaff: state => state.config.defaultStaff
  }),
  methods: {
    setErrorMessage: function(value) {
      this.errorMessage = value;
      //IMPORTANT: require a setter to udpate data and trigger reactive view update
    },
    checkValidation() {

      const nameInputs = [this.defaultName, this.name] // OR ==> account-item
      const accountInputs = [this.accountValue, this.password] // AND ==> name-item
      const isAccountValid = this.checkValidationSet (accountInputs, 'AND')
      const isNameValid = this.checkValidationSet (nameInputs, 'OR')

      if (!isAccountValid || !isNameValid) {
        !isAccountValid && this.setErrorMessage("請填入正確帳號密碼");
        !isNameValid && this.setErrorMessage("請選姓名");
        this.removeErrorMessage ();
      } else {
        this.setErrorMessage ("");
        const username = this.defaultName || this.name
        LoginAPI.start(this.accountValue, this.password, username, this.loginSuccessHandler, this.loginFailHandler);
      }
    },
    checkValidationSet (inputs, checkType) {
      console.assert (checkType === 'AND' || checkType === 'OR')

      let validItems = []
      let isAllValid = false
      inputs.map (item => { !this.isEmpty(item) && validItems.push(item) });

      if (checkType === 'AND') { isAllValid = validItems.length == inputs.length }
      if (checkType === 'OR') { isAllValid = validItems.length > 0 }

      return isAllValid

    },
    loginSuccessHandler() {
      SocketAPI.init();
      FormAPI.init();
      MessageAPI.init();
      CheckInAPI.init();
      SensorAPI.init();
      this.goToMain();
    },
    loginFailHandler() {
      this.setErrorMessage("帳號密碼不對，無法登入");
      this.removeErrorMessage();
    },
    isEmpty(value) {
      return value === undefined || value === null || value === "";
    },
    goToMain() {
      // this required to insert number and object as $router load not work
      this.$f7Router.changeRoute("/main", 0, {});
    },
    removeErrorMessage() {
      setTimeout(() => {
        this.setErrorMessage("");
      }, 2000);
    }
  },
  mounted() {
    // setTimeout(() => {
    //   LoginAPI.start( "總指揮", 1234, "aaa", this.loginSuccessHandler, this.loginFailHandler);
    // }, 500);
  }
};

</script>


<style lang="sass" scoped>
.error {
    background: #e46a5d;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    width: 80%;
    margin: 0 auto;
}
.name-title {
    color:#60a6ca;
    text-align: center;
    margin: 10px 0;
}
.list-block{
    font-size: 14px;
    border-radius: 5px;
    overflow: hidden;
    width: 85%;
    margin: 20px auto;
    -webkit-transition: border .5s;
    transition: border .5s;

    &.red {
      border: 3px solid #e46a5d;
    }
}
.button {
    background: #60a6ca;
    line-height: 40px;
    height: 40px;
    width: 85%;
    margin: 0 auto;
}
</style>