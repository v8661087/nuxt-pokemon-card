<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row v-if="products.length">
          <Card v-for="product in products" :product="product" :key="product.id" />
        </v-row>
        <v-row v-else justify="center" align="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Card from "@/components/Card";
export default {
  props: {
    source: String
  },
  components: {
    Card
  },
  data() {
    return {
      drawer: null,
      loading: true,
      products: []
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
    fetch("https://guarded-garden-48374.herokuapp.com/products")
      .then(res => res.json())
      .then(res => (this.products = res));
  }
};
</script>
