import { AppRouter } from './AppRouter';
import { Footer } from './components/atoms/Footer';
import { Navbar } from './components/atoms/Navbar';

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        <main className="flex w-full flex-1">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
