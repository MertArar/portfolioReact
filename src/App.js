import Banner from "./components/banner/Banner";
import ContactLeft from "./components/contact/ContactLeft";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <ContactLeft />
      </div>
    </div>
  );
}

export default App;
