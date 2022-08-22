const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "GOOD":
<<<<<<< HEAD
      return { ...state, good: action.data };
=======
      return { ...state, good: state.good + 1 };
>>>>>>> ee9d099bdd8e1f7aa8d92063378aa166775f6da3
    case "OK":
      return state;
    case "BAD":
      return state;
    case "ZERO":
      return state;
    default:
      return state;
  }
};

export const good = () => {
  return {
    type: "GOOD",
    data: initialState.good + 1,
  };
};

export default counterReducer;
