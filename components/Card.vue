<template>
  <v-lazy>
    <v-card class="ma-3" max-width="150">
      <v-img class="white--text align-end" height="200px" :src="card.src">
        <v-card-title>{{card.name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">價錢: {{card.price}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>屬性: {{card.type}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click="handleDelete">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-lazy>
</template>
<script>
export default {
  props: {
    card: Object
  },
  methods: {
    handleDelete() {
      this.$emit("delete");
    }
  }
};
</script>