import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import global from "./global.module.scss";
function App() {
  return (
    <div>
      <Navbar />
      <main className={global.container}>
        <Home />
      </main>
    </div>
  );
}

export default App;
