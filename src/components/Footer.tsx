function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center bg-[#101110] align-middle">
      <a href="/reactjs-smallprojects/contact">
        <div className="w-full max-w-7xl py-4">
          <p className="block text-center xl:flex xl:justify-center xl:align-middle">
            <span className="block">
              © Copyright 2023 - {currentYear}
              <span className="hidden xl:inline">&nbsp;|&nbsp;</span>
            </span>
            <span className="block">
              All rights reserved
              <span className="hidden xl:inline">&nbsp;|&nbsp;</span>
            </span>
            <span className="block">This website was made</span>
            <span className="block">
              <span className="hidden xl:inline">&nbsp;</span>
              by Laurențiu Cozma
            </span>
          </p>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
