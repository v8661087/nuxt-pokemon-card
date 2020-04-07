<template>
  <v-lazy>
    <v-card class="ma-3" width="150" height="305">
      <v-img class="white--text align-end" height="200px" :src="card.src">
        <v-card-title>{{card.name}}</v-card-title>
      </v-img>

      <v-card-text class="text--primary" v-show="card.name">
        <div>屬性: {{card.type}}</div>
      </v-card-text>

      <v-card-actions v-show="card.name">
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