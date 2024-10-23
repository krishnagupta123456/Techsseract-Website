
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
     
    </div>
  );
}

export default App;
