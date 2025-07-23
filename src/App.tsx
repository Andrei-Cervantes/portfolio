import MainContent from "@/components/custom/mainContent/MainContent";
import Footer from "@/components/custom/footer/Footer";
import Banner from "@/components/custom/banner/Banner";

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
