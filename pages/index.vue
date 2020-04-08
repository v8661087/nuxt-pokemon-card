<template>
  <v-app>
    <v-content>
      <v-container v-if="products.length">
        <v-row>
          <v-btn
            v-for="type in types"
            :key="type.name"
            class="ma-1"
            fab
            dark
            :color="type.color"
            @click="setType(type)"
          >{{type.name}}</v-btn>
        </v-row>
        <v-row>
          <Product
            v-for="product in filteredProducts"
            :product="product"
            :key="product._id"
            @add="addToCards(product)"
          />
          <nuxt-link to="cards">
            <v-btn fixed dark fab bottom right color="pink">
              <v-icon>mdi-cards</v-icon>
            </v-btn>
          </nuxt-link>
        </v-row>
        <v-row justify="center">
          <v-dialog v-model="dialog" max-width="90">
            <img src="@/assets/pokeball.png" />
          </v-dialog>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-row justify="center" align="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Product from "@/components/Product";
import { mapState } from "vuex";
export default {
  props: {
    source: String
  },
  components: {
    Product
  },
  data() {
    return {
      drawer: null,
      dialog: false,
      currType: "All",
      types: [
        { name: "All" },
        { name: "火", color: "red darken-2" },
        { name: "水", color: "blue darken-2" },
        { name: "草", color: "green darken-2" },
        { name: "電", color: "yellow darken-2" },
        { name: "冰", color: "cyan darken-2" },
        { name: "龍", color: "pink darken-2" },
        { name: "鋼", color: "purple darken-2" },
        { name: "飛行", color: "indigo darken-2" },
        { name: "一般", color: "teal darken-2" },
        { name: "格鬥", color: "lime darken-2" }
      ]
    };
  },
  computed: {
    ...mapState(["loading", "products", "cards"]),
    filteredProducts() {
      if (this.currType === "All") {
        return this.products;
      }
      return this.products.filter(
        item => item.type.indexOf(this.currType) > -1
      );
    }
  },
  methods: {
    addToCards(product) {
      this.$store.commit("addToCards", product);
      this.dialog = true;
      setTimeout(() => {
        this.dialog = false;
      }, 500);
    },
    setType(type) {
      this.currType = type.name;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getProducts");
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      if (this.products) {
        this.$nuxt.$loading.finish();
      }
    });
  }
};
</script>
