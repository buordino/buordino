import FooterAboutUs from "./FooterAboutUs";
import FooterBottom from "./FooterBottom";
import FooterContact from "./FooterContact";
import FooterDownloadLinks from "./FooterDownloadLinks";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="bg-gray-100 dark:bg-black py-16 ">
          <FooterDownloadLinks />
          <FooterAboutUs />
          <FooterContact />
        </div>
        <div className="bg-white dark:bg-gray-900">
          <FooterBottom />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
