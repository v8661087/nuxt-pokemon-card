export const state = () => ({
  products: [],
  cards: [{}, {}, {}, {}, {}, {}]
});
export const mutations = {
  addToCards(state, product) {
    state.cards.unshift({ ...product });
    state.cards.pop();
  },
  deleteFromCards(state, product) {
    state.cards.splice(state.cards.indexOf(product), 1);
    state.cards.push({});
  },
  GET_PRODUCTS(state, payload) {
    state.products = payload;
  }
};
export const actions = {
  async getProducts({ commit }) {
    try {
      const products = await this.$axios.$get(
        "https://guarded-garden-48374.herokuapp.com/products"
      );
      commit("GET_PRODUCTS", products);
    } catch (error) {}
  }
};
