import './App.css';
import Header from './components/Header';
import StreamifyApp from './components/StreamifyApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


function App() {
  return (
    <div className="App">
        <Header/>
        <StreamifyApp/>
    </div>
  );
}

export default App;
