
<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" main>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- login area -->
            <f7-block>
              <div class="text-center logo"></div>
              <h3 class="title">勞工安全管理</h3>
              <div v-if="errorMessage.length > 0" class="error">
                {{ errorMessage }}
              </div>
              <f7-list form ref="account-item">
                <f7-list-item >
                  <f7-label >帳號</f7-label>
                  <f7-input type="select" v-model="accountValue">
                    <option v-for="info in accounts"
                            :value="info.account">
                            {{ info.account }}
                    </option>
                  </f7-input>
                </f7-list-item>
                <f7-list-item ref="password-item">
                  <f7-label >密碼</f7-label>
                  <f7-input ref="password" type="password" placeholder="password"/>
                </f7-list-item>
              </f7-list>
              <h3 class="name-title">請填入您的登入姓名</h3>
              <f7-list form ref="name-item">
                <f7-list-item>
                  <f7-label >姓名</f7-label>
                  <f7-input ref="name" type="text" placeholder="name"/>
                </f7-list-item>
              </f7-list>
              <f7-button fill @click="checkValidation"> 登入 </f7-button>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
import {
  MessageAPI,
  FormAPI,
  LoginAPI,
  CheckInAPI,
  SocketAPI
} from "./apis/index";
import { accountInfo } from "./utils/db-config";

export default {
  data: function() {
    return {
      errorMessage: "",
      accounts: accountInfo,
      accountValue: accountInfo[0].account
    };
  },
  methods: {
    setErrorMessage: function(value) {
      this.errorMessage = value;
      //IMPORTANT: require a setter to udpate data and trigger reactive view update
    },
    checkValidation() {
      let self = this;
      const inputs = [
        {
          ref: "username",
          input: this.$refs.name,
          area: this.$refs["name-item"]
        },
        {
          ref: "password",
          input: this.$refs.password,
          area: this.$refs["account-item"]
        }
      ];

      let notValidItems = [];
      let validItems = {};
      inputs.map(item => {
        const inputValue = item.input.$el.getElementsByTagName("input")[0]
          .value;
        if (this.isEmpty(inputValue)) {
          notValidItems.push(item);
        } else {
          validItems[item.ref] = inputValue;
        }
      });

      if (notValidItems.length > 0) {
        notValidItems.map(item => {
          const highlightArea = item.area.$el;
          if (!highlightArea.classList.contains("red")) {
            highlightArea.classList.add("red");
            highlightArea.getElementsByTagName("input")[0].value = "";
            setTimeout(() => {
              highlightArea.classList.remove("red");
              this.setErrorMessage("");
            }, 2000);
          }
        });
        this.setErrorMessage("請填入正確帳號密碼");
        this.removeErrorMessage();
      } else {
        this.setErrorMessage("");
        LoginAPI.start(
          this.accountValue,
          validItems.password,
          validItems.username,
          this.loginSuccessHandler,
          this.loginFailHandler
        );
      }
    },
    loginSuccessHandler() {
      SocketAPI.init();
      FormAPI.init();
      MessageAPI.init();
      CheckInAPI.init();
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
    setTimeout(() => {
      LoginAPI.start(
        "總指揮",
        0,
        "Ruby",
        this.loginSuccessHandler,
        this.loginFailHandler
      );
    }, 500);
  }
};
</script>

<style lang="sass" scoped>
.page {
    background:#2d566b;
}
/* fix issue for slider on chrome and firefox */
.range-slider input[type="range"]::-webkit-slider-thumb {
    border: 1px solid silver;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
.error {
    background: #e46a5d;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    width: 80%;
    margin: 0 auto;
}
.text-center {
    text-align:center;
}
.title {
    color:#e46a5d;
    text-align:center;
    font-size:20px;
}
.name-title {
    color:#60a6ca;
    text-align: center;
    margin: 10px 0;
}

.logo {
    height: 160px;
    width: 160px;
    background-size:contain;
    margin: 0 auto;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTQ2QTVEOyIgZD0iTTI1NiwwQzExNC42MTYsMCwwLDExNC42MTYsMCwyNTZzMTE0LjYxNiwyNTYsMjU2LDI1NnMyNTYtMTE0LjYxNiwyNTYtMjU2UzM5Ny4zODQsMCwyNTYsMEwyNTYsMHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENDU0NDY7IiBkPSJNNTA3LjgyNywzMDEuODM5Yy0wLjgxOS0wLjg1LTE2MC4wNDEtMTU5LjM3NS0xNjAuMzU4LTE1OS42NDIgICBjLTEuNzc3LTEuNDg1LTMuNjE1LTIuODg4LTUuNDYzLTQuMjg1di0wLjAzNmwtMC4xMzMtMC4wNjdsLTEuMjI5LTAuOTYzbC0xLjIwOC0wLjg2Yy0wLjYwNC0wLjQzNS0xLjIzNC0wLjgzNS0xLjg0My0xLjI2di0xLjI2NSAgIGMtMS40NDQtMC43ODgtMi45MzQtMS40OTUtNC40MDgtMi4yMzd2LTIuMTcxYy0xLjQ0NC0wLjc4OC0yLjkzNC0xLjQ5NS00LjQwOC0yLjIzN3YtMi4xNzFjLTEuNDQ0LTAuNzg4LTIuOTM0LTEuNDk1LTQuNDA4LTIuMjM3ICAgdi0yLjE3MWMtMjAuMzA2LTExLjA5LTQzLjU5Ny0xNy4zOTgtNjguMzYyLTE3LjM5OHMtNDguMDU2LDYuMzA4LTY4LjM2MiwxNy4zOTh2Ni4yMTZjLTIuNTE0LDEuMzcyLTQuOTY2LDIuODQyLTcuMzg4LDQuMzU3ICAgYy0wLjU2OCwwLjM1OC0xLjEzMiwwLjcyMi0xLjY5NSwxLjA5MWMtMi4wMzMsMS4zMTYtNC4wMjQsMi42NzMtNS45ODUsNC4wODZsLTEuMjEzLDAuODY1Yy0yLjMzLDEuNzE1LTQuNjAzLDMuNDk3LTYuODIsNS4zNDUgICBsLTAuOTUyLDAuODI0Yy0xLjg2OSwxLjU4Ny0zLjY5MiwzLjIyNi01LjQ3OCw0LjkxYy0wLjUxMiwwLjQ4MS0xLjAyNCwwLjk2OC0xLjUzMSwxLjQ1OWMtMS44NjQsMS44MDctMy42ODYsMy42NjEtNS40NTMsNS41NjUgICBsLTAuNTI3LDAuNTUzYy0xLjkzNSwyLjExNS0zLjc5OSw0LjMwMS01LjYwNiw2LjUyOGMtMC40MDQsMC40OTctMC43ODgsMS4wMDQtMS4xODMsMS41MDVjLTEuNDEzLDEuNzkyLTIuNzg1LDMuNjItNC4xMTYsNS40ODQgICBjLTAuNDEsMC41NzktMC44MjksMS4xNDctMS4yMzQsMS43MzFjLTEuNjI4LDIuMzU1LTMuMjEsNC43NTEtNC43LDcuMjA0bC0wLjAzMSwwLjA1MWMtMS40NTQsMi40MDYtMi44MjEsNC44NjktNC4xMzcsNy4zNjMgICBjLTAuMzU4LDAuNjgxLTAuNzAxLDEuMzY3LTEuMDUsMi4wNDhjLTEuMDI0LDIuMDE3LTEuOTk3LDQuMDY1LTIuOTI5LDYuMTM5Yy0wLjI3MSwwLjYwOS0wLjU1OCwxLjIwMy0wLjgxOSwxLjgxOCAgIGMtMS4xMzIsMi42MjEtMi4xOTEsNS4yNzktMy4xNjksNy45NzdjLTAuMTc5LDAuNDkyLTAuMzI4LDAuOTg4LTAuNTAyLDEuNDg1Yy0wLjc4MywyLjI0OC0xLjUxLDQuNTE2LTIuMTg2LDYuODE1ICAgYy0wLjIzNiwwLjgwNC0wLjQ2NiwxLjYwOC0wLjY4NiwyLjQyMmMtMC42NCwyLjM0LTEuMjI0LDQuNy0xLjc0Niw3LjA4NmMtMC4xMDgsMC40OTItMC4yMzYsMC45NzMtMC4zMzgsMS40NjQgICBjLTAuNTk0LDIuODQyLTEuMDg1LDUuNzE0LTEuNTA1LDguNjE3Yy0wLjEwOCwwLjc0Mi0wLjE4OSwxLjQ5NS0wLjI4NywyLjI0M2MtMC4yOTIsMi4yNjMtMC41MjcsNC41NDEtMC43MTIsNi44MzUgICBjLTAuMDY3LDAuODUtMC4xNDMsMS43LTAuMTk1LDIuNTU1Yy0wLjE4NCwyLjk4NS0wLjMxMiw1Ljk5LTAuMzEyLDkuMDIxdjE0Ljk2NmMwLDcuNjI5LTIuNDM3LDE0LjY3NC02LjU0MywyMC40NTRsMCwwICAgYy0wLjc2OCwxLjA4LTEuNTk3LDIuMTA0LTIuNDc4LDMuMDkybC0wLjI2NiwwLjI5N2MtMC44MjksMC45MDYtMS43LDEuNzcyLTIuNjE2LDIuNTg2bC0wLjI4MiwwLjI2MSAgIGMtMi4wMzgsMS43NzctNC4yNywzLjMyOC02LjY3Niw0LjYwM2wtMC4yMywwLjExM2MtMS4wNTUsMC41NTMtMi4xNSwxLjA0NC0zLjI2NywxLjQ5bC0xLjAxOSwwLjM3NCAgIGMtMC44ODYsMC4zMjMtMS43ODcsMC42MDktMi43MDgsMC44NmwtMS4yNTQsMC4zMjNjLTAuOTExLDAuMjE1LTEuODQzLDAuMzc5LTIuNzg1LDAuNTIybC0xLjIwOCwwLjE4NCAgIGMtMS4zMzYsMC4xNTQtMi42ODgsMC4yNTEtNC4wNjUsMC4yNTF2MTMuMTI4bDE5OC40MjYsMTk1Ljc0M0MzOTIuNzc2LDUwMi4wMzEsNDg3LjM4Myw0MTQuODc0LDUwNy44MjcsMzAxLjgzOUw1MDcuODI3LDMwMS44Mzl6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjFCMTRGOyIgZD0iTTM5OC44NDMsMjY2Ljg1OXYtMTQuOTY2YzAtNzguODg5LTYzLjk1NC0xNDIuODQzLTE0Mi44NDMtMTQyLjg0M3MtMTQyLjg0Myw2My45NTQtMTQyLjg0MywxNDIuODQzICAgdjE0Ljk2NmMwLDE5LjU1My0xNS44NTIsMzUuNC0zNS40LDM1LjR2MTMuMTI4aDM1Ni40OHYtMTMuMTI4QzQxNC42ODksMzAyLjI1OSwzOTguODQzLDI4Ni40MDgsMzk4Ljg0MywyNjYuODU5TDM5OC44NDMsMjY2Ljg1OXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMUIxNEY7IiBkPSJNMzYxLjc3NCwzMTUuMzg3SDE1MC4yMjZoLTMyLjk0N2MxOC4xOTYsMCwzMi45NDcsMTQuMzIxLDMyLjk0NywzMi41MTJsMCwwICAgYzAsMTUuOTc0LDEyLjk0OCwyOC45MjMsMjguOTIzLDI4LjkyM2gxNTMuNzAyYzE1Ljk3NCwwLDI4LjkyMy0xMi45NDgsMjguOTIzLTI4LjkyM2wwLDBjMC0xOC4xOTcsMTQuNzUxLTMyLjUxMiwzMi45NDctMzIuNTEyICAgSDM2MS43NzRMMzYxLjc3NCwzMTUuMzg3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0YxQjE0RjsiIGQ9Ik0zOTguODQzLDI2Ni44NTl2LTE0Ljk2NmMwLTU0LjEyNC0zMC4xMDYtMTAxLjIwNy03NC40NzYtMTI1LjQ0di02LjIxNiAgIGMtMjAuMzA2LTExLjA5LTQzLjU5Ny0xNy4zOTgtNjguMzYyLTE3LjM5OHMtNDguMDU2LDYuMzA4LTY4LjM2MiwxNy4zOTh2Ni4yMTZjLTQ0LjM3NSwyNC4yMzMtNzQuNDc2LDcxLjMyMi03NC40NzYsMTI1LjQ0djE0Ljk2NiAgIGMwLDE5LjU1My0xNS44NTIsMzUuNC0zNS40LDM1LjR2MTMuMTI4aDM1Ni40OHYtMTMuMTI4QzQxNC42ODksMzAyLjI1OSwzOTguODQzLDI4Ni40MDgsMzk4Ljg0MywyNjYuODU5TDM5OC44NDMsMjY2Ljg1OXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFQTk2MzM7IiBkPSJNNDM0LjI0MywzMDIuMjU5aC05Ni4zNDhjLTEuNDk1LDQuNzIxLTMuNjgxLDkuMTM5LTYuNDM2LDEzLjEyOGgzMC4zMjFoMzIuOTQ3aDM5LjUyMXYtMTMuMTI4ICAgSDQzNC4yNDN6IE00MzQuMTQsMzAyLjI1OWgwLjEwMkg0MzQuMTRMNDM0LjE0LDMwMi4yNTl6IE00MzQuMDIyLDMwMi4yNTloMC4wOTdINDM0LjAyMkw0MzQuMDIyLDMwMi4yNTl6IE00MzMuOTEsMzAyLjI1OWgwLjA4NyAgIEg0MzMuOTFMNDMzLjkxLDMwMi4yNTl6IE00MzMuODAyLDMwMi4yNTRoMC4wOTJINDMzLjgwMkw0MzMuODAyLDMwMi4yNTR6IE00MzMuNjc5LDMwMi4yNTRoMC4wODdINDMzLjY3OUw0MzMuNjc5LDMwMi4yNTR6ICAgIE00MzMuNTg3LDMwMi4yNTRoMC4wNTZINDMzLjU4N0w0MzMuNTg3LDMwMi4yNTR6IE00MzMuNDY5LDMwMi4yNDloMC4wNTFINDMzLjQ2OUw0MzMuNDY5LDMwMi4yNDl6IE00MzMuMzg4LDMwMi4yNDloMC4wMjYgICBINDMzLjM4OEw0MzMuMzg4LDMwMi4yNDl6IE00MzMuMjY1LDMwMi4yNDRoMC4wMUg0MzMuMjY1TDQzMy4yNjUsMzAyLjI0NHogTTMyNC4zNjIsMTI2LjQ1NCAgIGM1LjUwOSwzLjAxMSwxMC43ODgsNi4zOSwxNS44MzEsMTAuMDcxTDMyNi41NjksMjUzLjIzYzguNDQzLDguODY4LDEzLjYyNCwyMC44NzQsMTMuNjI0LDM0LjA4NGg2NS4xNTIgICBjLTQuMDk2LTUuNzc1LTYuNTAyLTEyLjgzNi02LjUwMi0yMC40NTR2LTE0Ljk2NkMzOTguODQzLDE5Ny43NywzNjguNzM3LDE1MC42ODcsMzI0LjM2MiwxMjYuNDU0TDMyNC4zNjIsMTI2LjQ1NHogTTI1NiwxMDIuODM1ICAgTDI1NiwxMDIuODM1bC0wLjExOCwwLjAwNXYxMzUuMDI1aDM0Ljg2MmMxMi45ODQsMCwyNC43OTYsNS4wMDIsMzMuNjIzLDEzLjE4OXYtMTI0LjZ2LTYuMjE2ICAgQzMwNC4wNTYsMTA5LjE0OCwyODAuNzY1LDEwMi44MzUsMjU2LDEwMi44MzVMMjU2LDEwMi44MzV6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRUE5NjMzOyIgZD0iTTE4Ny42MzgsMTI2LjQ1NEwxODcuNjM4LDEyNi40NTRjLTUuNTA5LDMuMDExLTEwLjc4OCw2LjM5LTE1LjgyNiwxMC4wNzFsMTUuODI2LDEzNS41OThWMTI2LjQ1NCAgIEwxODcuNjM4LDEyNi40NTR6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTM3RjIxOyIgZD0iTTMyNC4zNjIsMTI2LjQ1NHYxMjQuNmMwLjc1OCwwLjcwMSwxLjQ5NSwxLjQyOCwyLjIwNywyLjE3NmwxMy42MjQtMTE2LjcwNSAgIEMzMzUuMTUsMTMyLjgzOCwzMjkuODcxLDEyOS40NjQsMzI0LjM2MiwxMjYuNDU0TDMyNC4zNjIsMTI2LjQ1NHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFQTk2MzM7IiBkPSJNMzk0LjcxNiwzMTUuMzg3aC0zMi45NDdoLTMwLjMyMWMtOC45MjQsMTIuOTEzLTIzLjgyOCwyMS4zNzYtNDAuNzE0LDIxLjM3NmgtMzQuODYydjQwLjA2NGg3Ni45NzkgICBjMTUuOTc0LDAsMjguOTIzLTEyLjk0OCwyOC45MjMtMjguOTIzbDAsMEMzNjEuNzc0LDMyOS43MDgsMzc2LjUyNSwzMTUuMzg3LDM5NC43MTYsMzE1LjM4N0wzOTQuNzE2LDMxNS4zODd6Ii8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRTM3RjIxOyIgcG9pbnRzPSIzOTQuNzE2LDMxNS4zODcgMzYxLjc3NCwzMTUuMzg3IDMzMS40NTMsMzE1LjM4NyAgIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTE4ODdFOyIgZD0iTTQzNC4xMiwzMDIuMjU5aDAuMDJINDM0LjEyTDQzNC4xMiwzMDIuMjU5eiBNNDMzLjk5NywzMDIuMjU5aDAuMDJINDMzLjk5N0w0MzMuOTk3LDMwMi4yNTl6ICAgIE00MzMuODk0LDMwMi4yNTloMC4wMkg0MzMuODk0TDQzMy44OTQsMzAyLjI1OXogTTQzMy43NjYsMzAyLjI1NGgwLjAzNkg0MzMuNzY2TDQzMy43NjYsMzAyLjI1NHogTTQzMy42NDMsMzAyLjI1NGgwLjAzNkg0MzMuNjQzICAgTDQzMy42NDMsMzAyLjI1NHogTTQzMy41MjEsMzAyLjI1NGgwLjA2N0g0MzMuNTIxTDQzMy41MjEsMzAyLjI1NHogTTQzMy40MTMsMzAyLjI0OWgwLjA1Nkg0MzMuNDEzTDQzMy40MTMsMzAyLjI0OXogICAgTTQzMy4yNywzMDIuMjQ0bDAuMTEzLDAuMDA1TDQzMy4yNywzMDIuMjQ0TDQzMy4yNywzMDIuMjQ0eiBNNDA1LjM4MSwyODcuMzE0aC0wLjAzNmM2LjIzNiw4Ljc5NiwxNi4zODksMTQuNjE4LDI3LjkxOSwxNC45MyAgIEM0MjEuNzQ1LDMwMS45MzIsNDExLjYyMiwyOTYuMSw0MDUuMzgxLDI4Ny4zMTRMNDA1LjM4MSwyODcuMzE0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0YwQjY3MTsiIGQ9Ik00MDUuMzQ1LDI4Ny4zMTRoLTY1LjE1MmMwLDUuMjA3LTAuODA0LDEwLjIzLTIuMjk5LDE0Ljk0NWg5Ni4zNDhoLTAuMTAyaC0wLjAyaC0wLjA5N2gtMC4wMiAgIGgtMC4wODdoLTAuMDJoLTAuMDkyaC0wLjAzNmgtMC4wODdoLTAuMDM2aC0wLjA1NmgtMC4wNjdoLTAuMDUxaC0wLjA1NmgtMC4wMjZsLTAuMTEzLTAuMDA1aC0wLjAxICAgQzQyMS43MzQsMzAxLjkzMiw0MTEuNTgxLDI5Ni4xMSw0MDUuMzQ1LDI4Ny4zMTRMNDA1LjM0NSwyODcuMzE0eiIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VDOTc4RTsiIHBvaW50cz0iMTA2LjYxOSwyODcuMzE0IDEwNi42MTksMjg3LjMxNCAxMDYuNTgzLDI4Ny4zNjUgMTA2LjYxOSwyODcuMzE0ICAiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFMTg4N0U7IiBkPSJNNzcuODgsMzAyLjI1OWgtMC4wMkg3Ny44OEw3Ny44OCwzMDIuMjU5eiBNNzguMDAzLDMwMi4yNTloLTAuMDJINzguMDAzTDc4LjAwMywzMDIuMjU5eiAgICBNNzguMTA2LDMwMi4yNTloLTAuMDJINzguMTA2TDc4LjEwNiwzMDIuMjU5eiBNNzguMjM0LDMwMi4yNTRoLTAuMDM2SDc4LjIzNEw3OC4yMzQsMzAyLjI1NHogTTc4LjM1NiwzMDIuMjU0aC0wLjAzNkg3OC4zNTYgICBMNzguMzU2LDMwMi4yNTR6IE03OC40NzksMzAyLjI1NGgtMC4wNjdINzguNDc5TDc4LjQ3OSwzMDIuMjU0eiBNNzguNTg3LDMwMi4yNDloLTAuMDU2SDc4LjU4N0w3OC41ODcsMzAyLjI0OXogTTc4LjczLDMwMi4yNDQgICBsLTAuMTEzLDAuMDA1TDc4LjczLDMwMi4yNDRMNzguNzMsMzAyLjI0NHogTTEwNi42NTUsMjg3LjMxNGgtMC4wMzZsMCwwbDAsMGwtMC4wMzYsMC4wNTEgICBjLTYuMjQxLDguNzU1LTE2LjM0OCwxNC41NjYtMjcuODQzLDE0Ljg3OUM5MC4yNjYsMzAxLjkzMiwxMDAuNDE5LDI5Ni4xMSwxMDYuNjU1LDI4Ny4zMTRMMTA2LjY1NSwyODcuMzE0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1Qzk4NDsiIGQ9Ik0yMDYuNDI4LDI4Ny4zMTRoLTk5Ljc3M2MtNi4yMzYsOC43OTYtMTYuMzg5LDE0LjYxOC0yNy45MTksMTQuOTNoLTAuMDFsLTAuMTEzLDAuMDA1aC0wLjAyNiAgIGgtMC4wNTZoLTAuMDUxaC0wLjA2N2gtMC4wNTZoLTAuMDM2aC0wLjA4N2gtMC4wMzZoLTAuMDkyaC0wLjAyaC0wLjA4N2gtMC4wMkg3Ny44OGgtMC4wMmgtMC4xMDJoMTMwLjk3ICAgQzIwNy4yMzcsMjk3LjU0NCwyMDYuNDI4LDI5Mi41MjEsMjA2LjQyOCwyODcuMzE0TDIwNi40MjgsMjg3LjMxNHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFMzdGMjE7IiBkPSJNMjkwLjc0NCwyMzcuODY1aC0zNC44NjJjMjEuNzE5LDAsNDAuMTY2LDEzLjk5OCw0Ni44MDcsMzMuNDY0djAuMDA1bDAuMDIxLDAuMDYxbDAuMDA1LDAuMDIgICBsMC4wMTUsMC4wNDZsMC4wMSwwLjAzNmwwLjAxLDAuMDM2bDAuMDE1LDAuMDQ2bDAuMDA1LDAuMDIxbDAuMDIsMC4wNTZsMC4wMDUsMC4wMWMxLjYzOCw0LjkxNSwyLjUyNCwxMC4xNzMsMi41MjQsMTUuNjQyaDM0Ljg2MiAgIGMwLTEzLjIxLTUuMTgxLTI1LjIxMS0xMy42MjQtMzQuMDg0bC0yLjIwNywxOC44OTN2LTIxLjA3NEMzMTUuNTQsMjQyLjg2NywzMDMuNzI0LDIzNy44NjUsMjkwLjc0NCwyMzcuODY1TDI5MC43NDQsMjM3Ljg2NXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNERDZCMTU7IiBkPSJNMzI0LjM2MiwyNTEuMDU0djIxLjA3NGwyLjIwNy0xOC44OTNDMzI1Ljg1NywyNTIuNDgzLDMyNS4xMiwyNTEuNzU2LDMyNC4zNjIsMjUxLjA1NCAgIEwzMjQuMzYyLDI1MS4wNTR6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTM3RjIxOyIgZD0iTTMzNy44OTQsMzAyLjI1OWgtMzQuODYybC0wLjAwNSwwLjAxNWwtMC4wMDUsMC4wMjFsLTAuMDIsMC4wNjdsMCwwICAgYy0xLjQ5NSw0LjY4NS0zLjY3MSw5LjA2OC02LjQwNSwxMy4wM2gzNC44NjJDMzM0LjIxMywzMTEuMzk4LDMzNi4zOTksMzA2Ljk4LDMzNy44OTQsMzAyLjI1OUwzMzcuODk0LDMwMi4yNTl6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTM3RjIxOyIgZD0iTTMzMS40NTMsMzE1LjM4N2gtMzQuODYyYy04LjkyNCwxMi45MTMtMjMuODI4LDIxLjM3Ni00MC43MTQsMjEuMzc2aDM0Ljg2MiAgIEMzMDcuNjI1LDMzNi43NjMsMzIyLjUzNCwzMjguMzA1LDMzMS40NTMsMzE1LjM4N0wzMzEuNDUzLDMxNS4zODd6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTk5QTRBOyIgZD0iTTM0MC4xOTMsMjg3LjMxNGgtMzQuODYyYzAsNS4xMi0wLjc3OCwxMC4wNjEtMi4yMjIsMTQuNzA1bC0wLjAwNSwwLjAwNWwtMC4wMjEsMC4wNjFsLTAuMDA1LDAuMDIgICBsLTAuMDE1LDAuMDUxbC0wLjAxLDAuMDM2bC0wLjAxLDAuMDM2bC0wLjAxLDAuMDM2aDM0Ljg2MkMzMzkuMzg0LDI5Ny41NDQsMzQwLjE5MywyOTIuNTIxLDM0MC4xOTMsMjg3LjMxNEwzNDAuMTkzLDI4Ny4zMTR6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTQ2QTVEOyIgZD0iTTMwNS4zMjYsMjg3LjMxNGMwLDI3LjMxLTIyLjEzOSw0OS40NDktNDkuNDQ5LDQ5LjQ0OXMtNDkuNDQ5LTIyLjEzOS00OS40NDktNDkuNDQ5ICAgYzAtMjcuMzEsMjIuMTM5LTQ5LjQ0OSw0OS40NDktNDkuNDQ5UzMwNS4zMjYsMjYwLjAwNCwzMDUuMzI2LDI4Ny4zMTRMMzA1LjMyNiwyODcuMzE0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Q0NTQ0NjsiIGQ9Ik0yNTYsMjM3Ljg3djk4Ljg4OGMyNy4yNTQtMC4wNjcsNDkuMzMxLTIyLjE3NSw0OS4zMzEtNDkuNDQ0ICAgQzMwNS4zMzEsMjYwLjA0NSwyODMuMjU0LDIzNy45MzcsMjU2LDIzNy44N0wyNTYsMjM3Ljg3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzhBRDFFNjsiIGQ9Ik0yOTMuNjAxLDI4Ny4zMTRjMCwyMC44MzMtMTYuODkxLDM3LjcyNC0zNy43MTksMzcuNzI0cy0zNy43MjQtMTYuODkxLTM3LjcyNC0zNy43MjQgICBjMC0yMC44MzMsMTYuODkxLTM3LjcxOSwzNy43MjQtMzcuNzE5UzI5My42MDEsMjY2LjQ4MSwyOTMuNjAxLDI4Ny4zMTRMMjkzLjYwMSwyODcuMzE0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU4QThDNDsiIGQ9Ik0yNTUuODgyLDI0OS41OTVjLTIwLjgzMywwLTM3LjcyNCwxNi44OTEtMzcuNzI0LDM3LjcxOWMwLDIuMTIsMC4yMiw0LjE4OCwwLjU1Myw2LjIxNiAgIGMyLjk3LTE3Ljg2OSwxOC40NTgtMzEuNTA4LDM3LjE2Ni0zMS41MDhzMzQuMTk2LDEzLjY0LDM3LjE2NiwzMS41MDhjMC4zMzgtMi4wMjgsMC41NTMtNC4wOTEsMC41NTMtNi4yMTYgICBjMC0wLjU2OC0wLjAxLTEuMTM3LTAuMDM2LTEuN0MyOTIuNjc1LDI2NS41NjksMjc2LjE0MiwyNDkuNTk1LDI1NS44ODIsMjQ5LjU5NUwyNTUuODgyLDI0OS41OTV6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQzBFNUYwOyIgZD0iTTI0Mi4yNjMsMjk1LjE2OGMtMy45MTcsMC03LjA5MSwzLjE3NC03LjA5MSw3LjA5MWMwLDMuOTE3LDMuMTc0LDcuMDkxLDcuMDkxLDcuMDkxICAgYzMuOTE3LDAsNy4wOTEtMy4xNzQsNy4wOTEtNy4wOTFDMjQ5LjM1NCwyOTguMzQyLDI0Ni4xOCwyOTUuMTY4LDI0Mi4yNjMsMjk1LjE2OEwyNDIuMjYzLDI5NS4xNjh6IE0yNjQuOTU1LDI2Ni43ODMgICBjLTcuMzU3LDAtMTMuMzIyLDUuOTY1LTEzLjMyMiwxMy4zMjJjMCw3LjM1Nyw1Ljk2NSwxMy4zMjIsMTMuMzIyLDEzLjMyMmM3LjM1NywwLDEzLjMyMi01Ljk2NSwxMy4zMjItMTMuMzIyICAgQzI3OC4yODIsMjcyLjc0OCwyNzIuMzEyLDI2Ni43ODMsMjY0Ljk1NSwyNjYuNzgzTDI2NC45NTUsMjY2Ljc4M3oiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
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