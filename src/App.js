import AmountComponent from './components/AmountComponent/AmountComponent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScreenComponent from './components/ScreenComponent/ScreenComponent';
import SeatComponent from './components/SeatComponent/SeatComponent';


function App() {
  return (
    <div className="flex-col justify-center items-center ">
      <Header/>
      <SeatComponent/>
      <ScreenComponent/>
      <AmountComponent/>
      <Footer/>
    </div>
  );
}

export default App;
