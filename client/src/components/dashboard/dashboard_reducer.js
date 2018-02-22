
export default function dashboardReducer(state = {
    user: {
      id: '',
      name: '',
      age: '',
      gender: '',
    },
  }, action) {

  switch (action.type) {
    
    case '': {
      return { ...state, };
    }

    default: return state;
  }
}

export default dashboardReducer;
