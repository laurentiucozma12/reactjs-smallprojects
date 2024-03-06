import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Accordion from './pages/accordion/Accordion';
import NoPage from './pages/NoPage';
// import Accordion from './components/accordion/Accordion.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main
          className=" mx-auto mt-[40px] max-w-7xl px-6 py-2
                      sm:mt-[54px]
                      xl:mt-[70px] 
                      2xl:px-0"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reactjs-smallprojects/" element={<Home />} />
            <Route
              path="/reactjs-smallprojects/accordion"
              element={<Accordion />}
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
