import "./App.css";
import Diagram from "./components/Diagram/Diagram";
import { UserCard } from "./components/UserCard";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <Diagram data={data}/>
    </div>
  );
}
export default App;
