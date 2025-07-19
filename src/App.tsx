import Header from "./components/custom/Header/Header";
import MainContent from "./components/custom/MainContent/MainContent";
import Footer from "./components/custom/Footer/Footer";
import Banner from "./components/custom/Banner/Banner";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
