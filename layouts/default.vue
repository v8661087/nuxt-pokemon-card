<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <nuxt-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content class>
              <v-list-item-title>nuxt-pokemon-card</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link v-for="link in links" :key="link.title" :link="link" :to="link.to">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content class>
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/dashboard" v-show="$store.state.authenticated">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content class>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/login" v-show="!$store.state.authenticated">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <a>
          <v-list-item link v-show="$store.state.authenticated" @click="logout">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon class="d-sm-none" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="d-sm-none">nuxt-pokemon-card</v-toolbar-title>
      <v-row class="d-flex mx-0">
        <nuxt-link to="/" class="d-none d-sm-flex">
          <v-list-item link>
            <v-list-item-action class="mr-1">
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content class="d-none d-md-flex">
              <v-list-item-title>nuxt-pokemon-card</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link
          class="d-none d-sm-flex"
          v-for="link in links"
          :key="link.title"
          :link="link"
          :to="link.to"
        >
          <v-list-item link>
            <v-list-item-action class="mr-1">
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="d-none d-md-flex">
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/dashboard" v-if="$store.state.authenticated" class="d-none d-sm-flex">
          <v-list-item link>
            <v-list-item-action class="mr-1">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content class="d-none d-md-flex">
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <a>
          <v-list-item
            link
            class="d-none d-sm-flex"
            v-if="!$store.state.authenticated"
            @click="toLogin"
          >
            <v-list-item-action class="mr-1">
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content class="d-none d-md-flex">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
        <a>
          <v-list-item
            link
            class="d-none d-sm-flex"
            v-if="$store.state.authenticated"
            @click="logout"
          >
            <v-list-item-action class="mr-1">
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content class="d-none d-md-flex">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-row>
    </v-app-bar>

    <v-content class="pa-0">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer dark padless>
      <v-card width="100vw" flat tile class="indigo darken-1 white--text text-center">
        <v-card-text class="pa-1">
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
          <v-btn class="mx-3 white--text" icon>
            <a
              href="https://github.com/v8661087/nuxt-pokemon-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon size="24px">mdi-github</v-icon>
            </a>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pa-1">僅作為個人練習作品</v-card-text>

        <v-card-text class="white--text pa-1">@{{ new Date().getFullYear() }}</v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      links: [
        {
          icon: "mdi-information",
          title: "About",
          to: "/about",
        },
        {
          icon: "mdi-pokeball",
          title: "Pokemon",
          to: "/pokemon",
        },
        {
          icon: "mdi-cards",
          title: "Cards",
          to: "/cards",
        },
        {
          icon: "mdi-sword",
          title: "Battle",
          to: "/battle",
        },
      ],
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-google-plus",
        "mdi-linkedin",
        "mdi-instagram",
      ],
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
      setTimeout(() => this.$router.go(0), 300);
    },
    logout() {
      let auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("User signed out.");
      });
      this.$router.push("/login");
      this.$store.commit("logout");
      setTimeout(() => this.$router.go(0), 300);
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>