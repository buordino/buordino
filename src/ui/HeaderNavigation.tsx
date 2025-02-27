import { Link } from "react-router";

interface HeaderNavigationItemType {
  text: string;
  to: string;
}
export const headerNavigationItems: HeaderNavigationItemType[] = [
  { text: "خانه", to: "/" },
  { text: "امکانات اپلیکیشن", to: "/" },
  { text: "تماس با ما", to: "/" },
  { text: "قوانین", to: "/" },
];

const HeaderNavigation = () => {
  return (
    <ul className="text-white flex items-start gap-5">
      {headerNavigationItems.map((item, index) => (
        <li key={index} className="hover:underline hover:underline-offset-6">
          <Link to={item.to}>
            <span>{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavigation;
