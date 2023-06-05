import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import SignUp from './component/Signup'
import Login from './component/Login';
import Home from './component/Home';
import RoomInfo from './component/RoomInfo';
import ShowRoom from './component/ShowRoom';
import Footer from './component/Footer';
import HelpAndSuport from './component/HelpAndSuport';
import Contact from './component/Contact';
import Read from './component/Read';
import Update from './component/Update';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    // Test Branch
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/roominfo" element={<RoomInfo />} />
          <Route path="/showroom" element={<ShowRoom />} />
          <Route path="/helpandsuport" element={<HelpAndSuport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
