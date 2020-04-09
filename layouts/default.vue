<template>
  <v-app dark>
    <v-app-bar app clipped-left>
      <v-toolbar-title>
        <nuxt-link to="/">nuxt-pokemon-card</nuxt-link>
      </v-toolbar-title>
      <v-row class="d-flex ml-3">
        <nuxt-link v-for="link in links" :key="link.title" :link="link" :to="link.to">
          <v-list-item link>
            <v-list-item-action class="mr-1">
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/dashboard" v-show="$store.state.authenticated">
          <v-list-item link>
            <v-list-item-action class="mr-1">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/login" v-show="!$store.state.authenticated">
          <v-list-item link>
            <v-list-item-action class="mr-1">
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <a>
          <v-list-item link v-show="$store.state.authenticated" @click="logout">
            <v-list-item-action class="mr-1">
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
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
          to: "/about"
        },
        {
          icon: "mdi-pokeball",
          title: "Pokemon",
          to: "/pokemon"
        },
        {
          icon: "mdi-cards",
          title: "Cards",
          to: "/cards"
        },
        {
          icon: "mdi-sword",
          title: "Battle",
          to: "/battle"
        }
      ],
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-google-plus",
        "mdi-linkedin",
        "mdi-instagram"
      ]
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}
</style>