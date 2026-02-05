import Button from "./components/Button/Button";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting name="Nguyễn Văn Long" />
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>

      <Counter />
    </div>
  );
}

export default App;
