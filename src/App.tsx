import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SingleAccordion from './pages/accordion/SingleAccordion';

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
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/reactjs-smallprojects/" element={<Home />} />
            <Route
              path="/reactjs-smallprojects/contact"
              element={<Contact />}
            />
            <Route
              path="/reactjs-smallprojects/single-accordion"
              element={<SingleAccordion />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
