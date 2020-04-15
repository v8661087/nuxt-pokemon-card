export const state = () => ({
  authenticated: false,
  products: [],
  cards: [{}, {}, {}, {}, {}, {}],
  accounts: [{ email: "test@test.com", password: "testtest" }]
});
export const mutations = {
  addToCards(state, product) {
    if (state.cards.indexOf(product) === -1) {
      state.cards.unshift(product);
      state.cards.pop();
    }
  },
  deleteFromCards(state, product) {
    state.cards.splice(state.cards.indexOf(product), 1);
    state.cards.push({});
  },
  GET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  login(state) {
    state.authenticated = true;
  },
  logout(state) {
    state.authenticated = false;
  }
};
export const actions = {
  async getProducts({ commit }) {
    try {
      const products = await this.$axios.$get(process.env.VUE_APP_PRODUCTS_URL);
      commit("GET_PRODUCTS", products);
    } catch (error) {
      console.log(error);
    }
  }
};
