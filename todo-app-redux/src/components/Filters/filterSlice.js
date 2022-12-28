// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };
// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilter":
//       return {
//         ...state,
//         // filters: {
//         //   ...state.filters,
//         search: action.payload,
//         // },
//       };
//     case "filter/statusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/priorityFilter":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;
import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filter',
  initialState: {
    search: '',
    status: 'All',
    priority: [],
  },
  reducers: {
    searchFilter: (state, action) => {
      //mutation || IMMER(library) =>(không làm thay đổi giá trị state mặc định)
      state.search = action.payload;
    }, //create 1 action creators =>{type:'filter/searchFilter'}
    statusFilter: (state, action) => {
      state.status = action.payload;
    }, //=>{type:'filter/statusFilter'}
    priorityFilter: (state, action) => {
      state.priority = action.payload;
    }, //=>{type:'filter/priorityFilter'}
  },
});
