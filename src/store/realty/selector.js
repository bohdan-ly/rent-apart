const selectRealty = (state) => ({ ...state.realty });

const selectRealtyById = (id) => (state) => state.Realties.items.find((el) => el.idCategory === id);

const selectRealtyBySlug = (id) => (state) =>
  state.Realties.items.find((el) => el.idCategory === id);

export { selectRealty, selectRealtyById, selectRealtyBySlug };
