import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NoPage } from './pages/NoPage';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Accordion } from './pages/accordion/Accordion';
import { RandomColor } from './pages/random-color/RandomColor';
import { StarRating } from './pages/star-rating/StarRating';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main
          className=" mx-auto mt-[40px] max-w-7xl px-6 py-2
                      sm:mt-[56px]
                      xl:mt-[72px] xl:py-6
                      2xl:px-0"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reactjs-smallprojects/" element={<Home />} />
            <Route
              path="/reactjs-smallprojects/contact"
              element={<Contact />}
            />
            <Route
              path="/reactjs-smallprojects/accordion"
              element={<Accordion />}
            />
            <Route
              path="/reactjs-smallprojects/random-color-generator"
              element={<RandomColor />}
            />
            <Route
              path="/reactjs-smallprojects/star-rating"
              element={<StarRating />}
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
