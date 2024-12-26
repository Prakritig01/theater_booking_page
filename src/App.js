import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScreenComponent from './components/ScreenComponent/ScreenComponent';
import SeatComponent from './components/SeatComponent/SeatComponent';
import SelectedSeatDetails from './components/SelectedSeatDetails/SelectedSeatDetails';

function App() {
  return (
    <div className="flex-col justify-center items-center ">
      <Header/>
      <SeatComponent/>
      <ScreenComponent/>
      <SelectedSeatDetails/>
      <Footer/>
    </div>
  );
}

export default App;
