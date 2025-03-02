import FooterAboutUs from "./FooterAboutUs";
import FooterBottom from "./FooterBottom";
import FooterContact from "./FooterContact";
import FooterDownloadLinks from "./FooterDownloadLinks";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="bg-gray-100 py-16">
          <FooterDownloadLinks />
          <FooterAboutUs />
          <FooterContact />
        </div>
        <div className="bg-white">
          <FooterBottom />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
