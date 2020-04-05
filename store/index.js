export const state = () => ({
  cards: [],
});
export const mutations = {
  addToCards(state, product) {
    if (state.cards.some((item) => item._id === product._id)) {
      alert("已經有了");
    } else {
      state.cards.push({ ...product });
    }
  },
  deleteFromCards(state, product) {
    state.cards.splice(state.cards.indexOf(product), 1);
  },
};
