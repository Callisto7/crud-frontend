import Listing from './components/Listing';
import './App.css';
import etsy from './data/etsy';

function App() {

  return (
    <div className="container">
      <Listing items={etsy} />
    </div>
  );
}

export default App;
