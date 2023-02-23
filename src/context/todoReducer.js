const todoReducer = (state, action) => {
  switch (action.type) {
    case 'GET':
      return [...action.payload];
    case 'CREATE':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((task) => task.id !== action.payload.id);
    case 'UPDATE':
      return state.map((task) => (task.id === action.payload.id ? { ...action.payload } : task));
    default:
      return state;
  }
};

export default todoReducer;
