import "./App.css";
import Diagram from "./components/Diagram/Diagram";
import { UserCard } from "./components/UserCard";
import { data } from "./data/data";
import { data2 } from "./data/data2";

function App() {
  return (
    <div className="App">
      <section style={{ minHeight: "100vh", display: "grid", placeItems:"center" }}>
      <Diagram data={data}/>
      </section>
      <section style={{ minHeight: "100vh", display: "grid", placeItems:"center" }}>
      <Diagram data={data2}/>
      </section>
    </div>
  );
}
export default App;
