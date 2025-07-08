import Header from "./components/custom/Header/Header";
import MainContent from "./components/custom/MainContent/MainContent";
import Footer from "./components/custom/Footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
