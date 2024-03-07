import { Link } from 'react-router-dom';
import { useState } from 'react';
import { List, X } from 'phosphor-react';
import logo from '../assets/react.svg';

interface Page {
  name: string;
  route: string;
}

export const Navbar = () => {
  const pages: Page[] = [
    {
      name: 'HOME',
      route: '/reactjs-smallprojects/',
    },
    {
      name: 'CONTACT',
      route: '/reactjs-smallprojects/contact',
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
            <div className="flex items-center justify-between font-bold">
              {/* Link to Home Page */}
              <Link to="/reactjs-smallprojects/" className="flex">
                <img className="h-6 sm:h-10" src={logo} alt="react logo" />
                <span className="ms-1 sm:mt-0.5 sm:text-3xl">
                  ReactJs Small Projects
                </span>
              </Link>
              {/* Mobile Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" absolute right-5 top-1.5 block cursor-pointer p-1
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
                              absolute left-0 z-[-1] block w-full border-x-4 border-b-4 border-[#00D8FF] bg-[#161616] text-base transition-all duration-0 ease-in
                              sm:border-8 sm:duration-500
                              xl:static xl:z-auto xl:flex xl:border-0 xl:bg-transparent
                              ${isOpen ? 'top-10 sm:top-14' : 'top-[-1000px]'}
                            `}
                >
                  {pages.map((page, index) => (
                    <li
                      key={page.name}
                      className=" text-center text-[#00D8FF] duration-700 hover:bg-[#1f1f1f] hover:text-white
                                  xl:my-0
                                  xl:py-0 xl:pt-0.5 xl:hover:bg-transparent"
                    >
                      <Link
                        to={page.route}
                        className={`block min-w-full py-1 sm:px-60
                                    sm:py-3 sm:text-xl md:px-80
                                    xl:px-4 xl:py-0 xl:text-base ${index === pages.length - 1 ? 'xl:pe-0' : ''}`}
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
};
