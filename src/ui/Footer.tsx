import FooterAboutUs from "./FooterAboutUs";
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
      </section>
    </footer>
  );
};

export default Footer;
