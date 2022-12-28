const initState = [
  { id: 1, name: 'learn your', completed: false, priority: 'Medium' },
  { id: 2, name: 'learn ytb', completed: true, priority: 'High' },
  { id: 3, name: 'learn fb', completed: false, priority: 'Low' },
];
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];
    case 'todoList/toggleStatus':
      console.log('a');
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
};

export default todoListReducer;
