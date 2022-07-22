import { useSelector } from "react-redux";

function App() {
  const store = useSelector((store) => console.log(store));
  return <div className="App"></div>;
}

export default App;
