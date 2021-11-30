import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
