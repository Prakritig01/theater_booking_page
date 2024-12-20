
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScreenComponent from './components/ScreenComponent/ScreenComponent';
import SeatComponent from './components/SeatComponent/SeatComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <SeatComponent/>
      <ScreenComponent/>
      <Footer/>
    </div>
  );
}

export default App;
