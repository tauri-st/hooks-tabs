import "./styles.css";
import Tabs from "./Tabs";
//1. Import services
import services from "./services";

export default function App() {
  return (
    <div className="App">
      <h1>SqueakyClean Laundromat </h1>
      <h2>We take the dirty work out of laundry!</h2>
      {/*2. Pass services as a prop to the Tabs component */}
      <Tabs services={services} />
    </div>
  );
}
