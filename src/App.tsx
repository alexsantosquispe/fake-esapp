import { AppRouter } from './AppRouter';
import { Footer } from './components/atoms/Footer';
import { Navbar } from './components/atoms/Navbar';

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-neutral-100 text-sm">
        <Navbar />
        <main className="mt-12 flex w-full flex-1 justify-center">
          <div className="flex flex-1 md:max-w-7xl">
            <AppRouter />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
