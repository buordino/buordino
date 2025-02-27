import FooterAppsLinks from "./FooterAppsLinks";
import FooterBottomPart from "./FooterBottomPart";
import FooterEmail from "./FooterEmail";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#D6D3D1] py-8 px-[2rem] sm:px-[3.5rem] md:px-[6rem] flex items-center justify-between gap-8">
        <div className="space-y-[1.2rem]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <FooterEmail
            emailAddress="example@gmail.com"
            text="example@gmail.com"
          />
          <FooterAppsLinks />
        </div>
        <img src="test" alt="Footer-Logo" className="w-[6rem] h-[6rem]" />
      </div>
      <FooterBottomPart />
    </footer>
  );
};

export default Footer;
