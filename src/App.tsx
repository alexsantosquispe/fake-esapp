import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        <main className="flex w-full flex-1"></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
