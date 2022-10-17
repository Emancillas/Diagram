import "./App.css";
import Diagram from "./components/Diagram/Diagram";
import { UserCard } from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <Diagram>
        <UserCard
          username="Daniel N. Brown"
          job="Manager of Graphic Design"
          email="dbrown@decentrauniverse.com"
          url="foto2.png"
        />
        <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            width: "85%", 
            margin: "40px auto", 
            justifyContent: "space-between" 
            }}>
          <UserCard
            username="Geraldine Simons"
            job="Graphic Designer"
            email="geraldine@decentrauniverse.com"
            url="foto.png"
          />
          <UserCard
            username="Ronald L. Correia"
            job="Graphic Designer"
            email="rcorreia@decentrauniverse.com"
            url="foto4.jpg"
          />
        </div>
        <UserCard
            username="Mary T. Boykin"
            job="Practicing Designer"
            email="marybokin@decentrauniverse.com"
            url="foto3.png"
          />
      </Diagram>
    </div>
  );
}

export default App;
