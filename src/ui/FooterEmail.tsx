import { MdOutlineEmail } from "react-icons/md";

interface FooterEmailPropsType {
  emailAddress: string;
  text: string;
}

const FooterEmail = ({ emailAddress, text }: FooterEmailPropsType) => {
  return (
    <div className="flex items-center gap-3 text-lg">
      <a href={emailAddress} className="pb-[.2rem]">{text}</a>
      <MdOutlineEmail size={24} />
    </div>
  );
};

export default FooterEmail;
