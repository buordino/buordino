import AppsLinksList from "./AppsLinksList";

const FooterBottom = () => {
  return (
    <div className="text-center py-12 px-4 space-y-8 dark:text-white">
      <span className="block text-sm">© 1402 بردینو. همه حقوق محفوظه.</span>
      <div className="flex items-center justify-center gap-8 text-sm">
        <a href="#">سیاست حریم خصوصی</a>
        <a href="#">شرایط استفاده</a>
      </div>
      <AppsLinksList />
    </div>
  );
};

export default FooterBottom;
