<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <Card v-for="card in cards" :card="card" :key="card._id" @delete="deleteFromCards(card)" />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: {
    Card
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  },
  methods: {
    deleteFromCards(card) {
      this.$store.commit("deleteFromCards", card);
    }
  }
};
</script>

<style>
</style>