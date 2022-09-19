import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
