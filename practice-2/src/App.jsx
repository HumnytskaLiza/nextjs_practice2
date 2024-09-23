import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import Faq from "./components/Faq";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <Faq />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
