import { useDispatch, useSelector } from "react-redux";
import { good } from "./reducer";

const App = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state);

  const goodFeedback = () => {
    dispatch(good());
  };

  return (
    <div>
      <button onClick={goodFeedback}>good</button>
      <button>ok</button>
      <button>bad</button>
      <button>reset stats</button>
      <div>good {feedback.good}</div>
      <div>ok</div>
      <div>bad</div>
    </div>
  );
};

export default App;
