import LeftBanner from "./components/banner/LeftBanner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <LeftBanner />
      </div>
    </div>
  );
}

export default App;
