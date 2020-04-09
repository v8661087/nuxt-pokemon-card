<template>
  <v-lazy>
    <v-card class="ma-3" width="150" height="305" style="cursor:pointer" @click="handleClick">
      <v-img class="white--text align-end" height="200px" :src="card.src">
        <v-card-title>{{card.name}}</v-card-title>
      </v-img>

      <v-card-text class="text--primary"></v-card-text>

      <v-card-actions></v-card-actions>
    </v-card>
  </v-lazy>
</template>
<script>
export default {
  props: {
    card: Object
  },
  methods: {
    handleClick() {
      this.$emit("battle");
    }
  }
};
</script>