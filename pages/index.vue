<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row v-if="products.length">
          <Product
            v-for="product in products"
            :product="product"
            :key="product._id"
            @add="addToCards(product)"
          />
        </v-row>
        <v-row v-else justify="center" align="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Product from "@/components/Product";
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
      loading: true,
      products: []
    };
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  },
  methods: {
    addToCards(product) {
      this.$store.commit("addToCards", product);
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
    fetch("https://guarded-garden-48374.herokuapp.com/products")
      .then(res => res.json())
      .then(res => (this.products = res));
  }
};
</script>
