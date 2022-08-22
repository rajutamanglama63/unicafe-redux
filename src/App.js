<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { good } from "./reducer";

const App = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state);

  const goodFeedback = () => {
    dispatch(good());
=======
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state;
  });
  const good = () => {
    dispatch({
      type: "GOOD",
    });
>>>>>>> ee9d099bdd8e1f7aa8d92063378aa166775f6da3
  };

  return (
    <div>
      <button onClick={goodFeedback}>good</button>
      <button>ok</button>
      <button>bad</button>
      <button>reset stats</button>
<<<<<<< HEAD
      <div>good {feedback.good}</div>
=======
      <div>good {data.good}</div>
>>>>>>> ee9d099bdd8e1f7aa8d92063378aa166775f6da3
      <div>ok</div>
      <div>bad</div>
    </div>
  );
};

export default App;
