const selectRealty = (state) => ({ ...state.realty });

const selectFilteredRealty = (filter) => (state) => {
  const { realties } = state.realty;
  const { area = [0, 10000], rooms = [0, 1000], status = '', search = '' } = filter;
  const filtered = realties.filter(
    (r) =>
      r.area > area[0] &&
      r.area <= area[1] &&
      r.rooms > rooms[0] &&
      r.rooms <= rooms[1] &&
      (!status || r.status === status) &&
      (!search || r.name.indexOf(search) === 0 || r.summary.indexOf(search) === 0),
  );
  return filtered;
};

const selectRealtyById = (id) => (state) => state.Realties.items.find((el) => el.idCategory === id);

const selectRealtyBySlug = (slug) => (state) =>
  state.realty.realties.find((el) => el.slug === slug);

export { selectRealty, selectFilteredRealty, selectRealtyById, selectRealtyBySlug };
