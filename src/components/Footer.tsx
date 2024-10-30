export function Footer() {
  return (
    <div className="padded py-6 text-center flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img className="mx-auto" src="/images/mobile/logo-footer.png" alt="Soller" />
        <span className="block">@ 2023 Soller, Inc. All rights reserved.</span>
      </div>
      <ul className="flex justify-center gap-6">
        <li>
          <a href="/">Terms</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>
    </div>
  );
}
