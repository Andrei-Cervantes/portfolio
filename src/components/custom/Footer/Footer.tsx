import footerBG from "../../../assets/footer-bg.png";

const Footer = () => {
  return (
    // contact
    <footer
      className="p-6 flex items-center justify-between gap-6 min-h-[600px] relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(17, 7, 31, 0.8) 0%, transparent 20%, transparent 80%, rgba(17, 7, 31, 0.8) 100%), url(${footerBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center 70%",
        boxShadow:
          "inset 0 0 60px rgba(17, 7, 31, 1), inset 0 0 30px rgba(17, 7, 31, 1)",
      }}
    >
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Footer</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
