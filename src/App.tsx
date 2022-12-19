import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
import { AutoBatchOther } from "./components/AutoBatchOther";
import { Transition } from "./components/Transition";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
    </div>
  );
}

export default App;
