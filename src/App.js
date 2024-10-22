
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import WorkSection from './components/WorkSection';
import Services from './components/Services';
import About from './components/About';


function App() {
  return (
    // <Router>
    <div className='App'>
      <Header />
      <WorkSection />
      <Services />
      <About />
      <Footer />
      {/* <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/home" element={<Home />} />
            <Route path="/worksection" element={<WorkSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/footer" element={<Footer />} /> 
        </Routes> */}
    </div>
  );
}

export default App;
