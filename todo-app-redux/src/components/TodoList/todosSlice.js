// const initState = [
//   { id: 1, name: 'learn your', completed: false, priority: 'Medium' },
//   { id: 2, name: 'learn ytb', completed: true, priority: 'High' },
//   { id: 3, name: 'learn fb', completed: false, priority: 'Low' },
// ];
// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload];
//     case 'todoList/toggleStatus':
//       console.log('a');
//       return state.map((item) =>
//         item.id === action.payload
//           ? { ...item, completed: !item.completed }
//           : item
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'learn your', completed: false, priority: 'Medium' },
    { id: 2, name: 'learn ytb', completed: true, priority: 'High' },
    { id: 3, name: 'learn fb', completed: false, priority: 'Low' },
  ],
  reducers: {
    addTodo: (state, action) => {
      //mutation || IMMER(library) =>(không làm thay đổi giá trị state mặc định)
      state.push(action.payload);
    }, //create 1 action creators =>{type:'todoList/addTodo'}
    toggleStatus: (state, action) => {
      const currentTodo = state.find((item) => item.id === action.payload);
      if (currentTodo) currentTodo.completed = !currentTodo.completed;
    }, //=>{type:'todoList/toggleStatus'}
  },
  extraReducers: builder => {
    
  }
});
export default todosSlice;

// export function addTodos(data) {
//   return function addTodoThunk(dispatch, getState) {
//     data.name = data.name + 'test';
//     dispatch(todosSlice.actions.addTodo(data));
//   };
// }
