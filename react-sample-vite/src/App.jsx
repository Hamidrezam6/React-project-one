import "./App.css";
import List from "./components/List";
import Card from "./components/Card";

const companies = ["Tesla", "Apple", "Microsoft", "Sony"];
function App() {
  const handleSelectItem = (item) => {
    console.log("item:", item);
  };

  return (
    <div>
      <Card>
        <Heading />
        <List
          items={companies}
          onClick={handleSelectItem}
          label="List of Companies:"
        />
      </Card>
    </div>
  );
}

export default App;

const Heading = () => {
  return <h1>Hello friends!</h1>;
};
