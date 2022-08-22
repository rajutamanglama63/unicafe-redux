const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      return { ...state, good: action.data };
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
