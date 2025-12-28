
import './App.css'
import List from './components/list'
import Card from './components/Card'


const companies = ['Tesla', 'Apple', 'Microsoft', 'Sony'];
function App() {
  const handleSelectItem = (item) => {
    console.log ('item:', item);
  };

  return (
    <>
      <div>
        <Card>
            <List items = {companies} onClick={handleSelectItem}/>
        </Card>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
