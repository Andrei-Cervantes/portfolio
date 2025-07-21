import MainContent from "./components/custom/MainContent/MainContent";
import Footer from "./components/custom/Footer/Footer";
import Banner from "./components/custom/Banner/Banner";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary font-montserrat">
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
