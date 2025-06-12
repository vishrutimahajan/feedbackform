import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Feedbacklist from "./pages/Feedbacklist";
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
              <Route path="/" element={<Home />}>
      <Route path="/FeedBack" element={<Feedback/>}>
       <Route path="/FeedBack List" element={<Feedbacklist/>}></Route>
      
      
      </Route>
      </Route> 
      </Routes>
      </BrowserRouter>
  );
}

export default App;
