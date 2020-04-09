<template>
  <v-content>
    <v-container class="d-flex flex-wrap justify-center">
      <div>
        <h1>從你的卡牌中挑選一張進行戰鬥</h1>
        <p>目前連贏次數:{{count}}</p>
        <v-row class="d-flex flex-wrap" style="max-width:660px">
          <battleCard v-for="card in cards" :card="card" :key="card._id" @battle="battle(card)" />
        </v-row>
      </div>
      <div>
        <h1>你的對手</h1>
        <battleCard :card="enemy" />
      </div>
    </v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title
            v-show="result === 'WIN'"
            class="headline"
          >{{result}}!!!使用{{pokemon.name}}打贏了{{enemy.name}}</v-card-title>
          <v-card-title
            v-show="result === 'LOSS'"
            class="headline"
          >{{result}}!!!使用{{pokemon.name}}打輸了{{enemy.name}}</v-card-title>
          <v-card-text>是否再次戰鬥</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

            <v-btn color="green darken-1" text @click="refreshEnemy">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-content>
</template>
<script>
import battleCard from "@/components/battleCard";
export default {
  data() {
    return {
      number: 0,
      dialog: false,
      result: "",
      pokemon: {},
      count: 0
    };
  },
  components: {
    battleCard
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
    products() {
      return this.$store.state.products;
    },
    enemy() {
      return this.products[this.number];
    }
  },
  methods: {
    battle(card) {
      this.pokemon = { ...card };
      if (card.name) {
        this.dialog = true;
        if (Math.random() > 0.5) {
          this.result = "WIN";
          this.count += 1;
        } else {
          this.result = "LOSS";
          this.count = 0;
        }
      }
    },
    refreshEnemy() {
      this.dialog = false;
      if (this.result === "WIN") {
        setTimeout(() => {
          this.number = this.getRandom(0, this.products.length);
        }, 500);
      }
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  async fetch({ store }) {
    await store.dispatch("getProducts");
  },
  created() {
    this.number = this.getRandom(0, this.products.length);
  }
};
</script>

<style>
</style>