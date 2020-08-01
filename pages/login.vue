<template>
  <v-content>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field
          type="password"
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Login</v-btn>
      </v-form>
      <div
        class="g-signin2"
        data-onsuccess="onSignIn"
        data-theme="dark"
        data-prompt="select_account"
      ></div>
      <div id="fb-root"></div>
      <div
        class="fb-login-button"
        data-size="large"
        data-button-type="login_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
        onlogin="checkLoginState()"
      ></div>
    </v-container>
  </v-content>
</template>
<script>
function createFB() {
  window.fbAsyncInit = function () {
    FB.init({
      appId: "2903396656422404",
      autoLogAppEvents: true,
      cookie: false,
      xfbml: true,
      version: "v2.9",
    });
    FB.AppEvents.logPageView();
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

export default {
  head() {
    return {
      meta: [
        { name: "google-signin-scope", content: "profile email" },
        {
          name: "google-signin-client_id",
          content:
            "386926783789-jf64i4b80rd3dsks4h3f12aegr097mfd.apps.googleusercontent.com",
        },
      ],
      script: [
        {
          src: "https://apis.google.com/js/platform.js",
          defer: true,
          async: true,
          crossorigin: "anonymous",
        },
        {
          src:
            "https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v7.0&appId=2903396656422404&autoLogAppEvents=1",
          defer: true,
          async: true,
          crossorigin: "anonymous",
          nonce: "9WEpcLMM",
        },
      ],
    };
  },
  mounted() {
    createFB();
    var vm = this;
    // Facebook function
    window.checkLoginState = function () {
      // Called when a person is finished with the Login Button.
      window.FB.getLoginStatus((response) => {
        if (response.status === "connected") {
          console.log("connected");
          vm.$store.commit("login");
          vm.$router.push("/dashboard");
        } else {
          console.log("failed");
        }
      });
    };
    //Google function
    window.onSignIn = function (googleUser) {
      vm.$store.commit("login");
      vm.$router.push("/dashboard");
    };
    if (window.FB) window.FB.XFBML.parse();
  },
  data: () => ({
    valid: true,
    email: "test@test.com",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "testtest",
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.login();
      }
    },
    login() {
      const accounts = this.$store.state.accounts;
      let account = accounts.find(
        (item) => item.email === this.email && item.password === this.password
      );
      if (account) {
        setTimeout(() => {
          this.$store.commit("login");
          this.$router.push("/dashboard");
        }, 500);
      }
    },
  },
  middleware: "auth",
};
</script>