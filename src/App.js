import { useDispatch, useSelector } from "react-redux";
import { bad, good, ok, reset } from "./reducer";

const App = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state);

  const goodFeedback = () => {
    dispatch(good());
  };

  const badFeedback = () => {
    dispatch(bad());
  };

  const okFeedback = () => {
    dispatch(ok());
  };

  const resetZero = () => {
    dispatch(reset());
  };

  return (
    <div>
      <button onClick={goodFeedback}>good</button>
      <button onClick={okFeedback}>ok</button>
      <button onClick={badFeedback}>bad</button>
      <button onClick={resetZero}>reset stats</button>
      <div>good {feedback.good}</div>
      <div>ok {feedback.ok}</div>
      <div>bad {feedback.bad}</div>
    </div>
  );
};

export default App;
