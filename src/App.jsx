import "./App.css";
import Organigram from "./components/Organigram";
import { data } from "./data/data";
import { data2 } from "./data/data2";

function App() {
  return (
    <div className="App">
      <section className="full-section">
        <Organigram data={data}/>
      </section>
      <section className="full-section">
        <Organigram data={data2}/>
      </section>
    </div>
  );
}
export default App;
