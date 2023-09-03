import './App.css';
import Homepage from './Pages/homePage';
import ViewBoard from './Pages/ViewBoard'
import { Routes, Route} from "react-router-dom";
// import Board from './Board/board';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/board" element={<ViewBoard />} />
      </Routes>
    </div>
  );
}

export default App;
