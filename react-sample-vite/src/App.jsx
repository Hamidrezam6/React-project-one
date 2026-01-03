import "./App.css";
import List from "./components/List";
import Card from "./components/Card";
import Heading from "./components/Heading";
import Button from "./components/Button";

const companies = ["Tesla", "Apple", "Microsoft", "Sony"];
function App() {
  const handleSelectItem = (item) => {
    console.log("item:", item);
  };

  return (
    <div>
      <Card>
        <Heading title = "React Project"/>
        <List
          items={companies}
          onClick={handleSelectItem}
          label="List of Companies:"
        />
        <Button />
      </Card>
    </div>
  );
}

export default App;
