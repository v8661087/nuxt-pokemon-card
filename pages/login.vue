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
    </v-container>
  </v-content>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    email: "test@test.com",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "testtest",
    passwordRules: [v => !!v || "Password is required"]
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
        item => item.email === this.email && item.password === this.password
      );
      if (account) {
        setTimeout(() => {
          this.$store.commit("login");
          this.$router.push("/dashboard");
        }, 500);
      }
    }
  },
  middleware: "auth"
};
</script>