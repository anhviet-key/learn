const initState = {
  search: "",
  status: "All",
  priority: [],
};
const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter/searchFilter":
      return {
        ...state,
        // filters: {
        //   ...state.filters,
        search: action.payload,
        // },
      };
    case "filter/statusFilter":
      return {
        ...state,
        status: action.payload,
      };
    case "filter/priorityFilter":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
