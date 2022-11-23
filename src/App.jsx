import './App.css'
import AboutPrime from './components/AboutPrime';
import Header from './components/Header';
import IsPrimeNumber from './components/IsPrimeNumber';

function App() {
  return (
    <div className="App">
      <AboutPrime/>
      <div className='right-column'>
        <Header/>      
        <IsPrimeNumber/>
      </div>      
    </div>
  );
}

export default App;
