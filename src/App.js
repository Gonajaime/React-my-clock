import './App.css';
import Countdown from './components/CountDown';
import DigitalClock from './components/DigitalClock';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DigitalClock></DigitalClock>

        <Countdown></Countdown>

        <StopWatch></StopWatch>
      </header>
    </div>
  );
}

export default App;
