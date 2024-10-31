export function Footer() {
  function renderFooterLinks() {
    const navItems = ['Terms', 'Privacy', 'Support'];

    return navItems.map((item) => (
      <li>
        <a href="/" className="py-3 px-2 rounded-md transition duration-300 ease-in-out hover:bg-slate-100">
          {item}
        </a>
      </li>
    ));
  }

  return (
    <div className="padded py-6 text-center flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img
          className="mx-auto"
          src="/images/logo-footer.png"
          alt="Soller"
          loading="lazy"
          width="127"
          height="32"
        />
        <span className="block">@ 2023 Soller, Inc. All rights reserved.</span>
      </div>
      <ul className="flex justify-center gap-3">
        {renderFooterLinks()}
      </ul>
    </div>
  );
}
