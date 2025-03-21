interface HeaderNavigationItemsType {
  text: string;
  href: string;
}

const HeaderNavigationItems: HeaderNavigationItemsType[] = [
  { text: "ویژگی‌ها", href: "#features" },
  { text: "معرفی اپ", href: "#app-showcase" },
  { text: "دانلود", href: "#download" },
  { text: "درباره ما", href: " #about" },
  { text: "تماس", href: "#contact" },
];

const HeaderNavigation = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-4 sm:gap-8 dark:text-white text-xs sm:text-sm">
        {HeaderNavigationItems.map((item, index) => (
          <li
            key={index}
            className="transition-all duration-300 hover:text-[#FF6347]"
          >
            <a href={item.href}>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
