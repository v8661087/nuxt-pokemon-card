<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <nuxt-link v-for="link in links" :key="link.title" :link="link" :to="link.to">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>nuxt-pokemon-card</v-toolbar-title>
    </v-app-bar>

    <v-content class="pa-0">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-cards",
          title: "Cards",
          to: "/cards"
        },
        {
          icon: "mdi-login",
          title: "Login",
          to: "/login"
        },
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/dashboard"
        }
      ]
    };
  }
};
</script>
<style>
a {
  text-decoration: none;
}
</style>