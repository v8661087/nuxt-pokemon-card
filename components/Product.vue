<template>
  <v-lazy>
    <v-card class="ma-3" width="150" height="305">
      <v-img class="white--text align-end" height="200px" :src="product.src">
        <v-card-title>{{product.name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">價錢: {{product.price}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>屬性: {{product.type}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click="handleClick">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-lazy>
</template>
<script>
export default {
  props: {
    product: Object
  },
  methods: {
    handleClick() {
      this.$emit("add");
    }
  }
};
</script>