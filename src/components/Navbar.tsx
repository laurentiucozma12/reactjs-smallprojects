import { Link } from 'react-router-dom';
import { useState } from 'react';
import { List, X } from 'phosphor-react';

interface Page {
  name: string;
  route: string;
}

function Navbar() {
  const pages: Page[] = [
    {
      name: 'HOME',
      route: '/reactjs-smallprojects/',
    },
    {
      name: 'ACCORDION',
      route: '/reactjs-smallprojects/accordion',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full bg-[#101110] shadow-md duration-0">
        <div
          className="z-10 mx-auto max-w-7xl bg-[#101110] px-6 duration-0 
                      xl:bg-transparent
                      2xl:px-0"
        >
          <div className="py-2 xl:py-4">
            <div className="flex items-center font-bold sm:justify-center xl:justify-between">
              {/* Link to Home Page */}
              <Link to="/reactjs-smallprojects/" className="flex">
                <span className="ms-1 sm:mt-0.5 sm:text-3xl">
                  ReactJs Small Projects
                </span>
              </Link>
              {/* Mobile Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" absolute right-2 top-1.5 block cursor-pointer p-1
                            sm:right-4 sm:top-2 
                            xl:hidden"
              >
                {isOpen ? (
                  <List
                    className=" xl:none
                                block text-xl
                                sm:text-3xl"
                  />
                ) : (
                  <X
                    className=" xl:none 
                                block text-xl
                                sm:text-3xl"
                  />
                )}
              </button>
              {/* Menu */}
              <div className="flex">
                <ul
                  className={`
                              absolute left-0 z-[-1] block w-full bg-[#161616] text-base transition-all duration-0 ease-in
                              sm:duration-500
                              xl:static xl:z-auto xl:flex xl:bg-transparent
                              ${isOpen ? 'top-10 sm:top-14' : 'top-[-490px]'}
                            `}
                >
                  {pages.map((page, index) => (
                    <li
                      key={page.name}
                      className=" py-1 text-center duration-700 hover:bg-[#212121cc] sm:py-4
                                  xl:my-0
                                  xl:py-0 xl:pt-0.5 xl:hover:bg-transparent"
                    >
                      <Link
                        to={page.route}
                        className={`px-14 py-1 sm:px-60
                                    sm:py-[18px] sm:text-xl md:px-80
                                    xl:px-4 xl:text-base ${index === pages.length - 1 ? 'xl:pe-0' : ''}`}
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
