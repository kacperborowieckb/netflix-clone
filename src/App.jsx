import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
