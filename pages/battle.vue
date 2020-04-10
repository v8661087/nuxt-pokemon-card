<template>
  <v-content>
    <v-container class="d-flex flex-wrap justify-center">
      <div>
        <h1>從你的卡牌中挑選一張進行戰鬥</h1>
        <p>目前連贏次數: {{count}}</p>
        <v-row class="d-flex flex-wrap" style="max-width:660px">
          <battleCard v-for="card in cards" :card="card" :key="card._id" @battle="battle(card)" />
        </v-row>
      </div>
      <div>
        <h1>你的對手</h1>
        <battleCard :card="enemy" v-if="enemy" />
      </div>
      <v-row justify="center" v-if=" pokemon && enemy">
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title v-if="result === 'WIN'" class="headline">
              {{result}}
              <br />
              使用{{pokemon.name}}打贏了{{enemy.name}}
            </v-card-title>
            <v-card-title v-else class="headline">
              {{result}}
              <br />
              使用{{pokemon.name}}打輸了{{enemy.name}}
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="refreshEnemy">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
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
      return this.products[this.number] || this.products[0];
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
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getNewNumber() {
      this.number = this.getRandom(0, this.products.length);
    },
    refreshEnemy() {
      this.dialog = false;
      if (this.result === "WIN") {
        setTimeout(() => {
          this.getNewNumber();
        }, 100);
      }
    }
  },
  created() {
    this.$store.dispatch("getProducts");
    this.getNewNumber();
  }
};
</script>

<style>
</style>