import React from "react";
import Image from "next/image";
import logo from "../content/images/static/addis_logo.png";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="flex justify-between py-3 items-center">
            <Image src={logo} alt="addis" width={180} height={50} />
            {/* <div className='flex items-center space-x-2'>
                <Image
                    src={sweden}
                    alt='Sweden'
                    width={30}
                    className='cursor-pointer'
                />
                <Image
                    src={norway}
                    alt='Norway'
                    className='cursor-pointer'
                />
                <Image
                    src={ukgb}
                    alt='United Kingdom (Great Britain)'
                    className='cursor-pointer'
                />
                <Image
                    src={denmark}
                    alt='Denmark'
                    className='cursor-pointer'
                />
            </div> */}
            <Link href="#" className="text-decoration-none text-black">
              Sv<i className="bi bi-caret-down-fill ms-1"></i>{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-theme">
        <div className="container">
          <div className="flex py-3 justify-between">
            <div className="space-x-10">
              <div className="group inline-block relative">
                <Link
                  className="group text-white text-decoration-none hover:text-gray-300 py-4"
                  href="/interviews"
                >
                  Intervjuer
                </Link>
              </div>
              <div className="group inline-block relative">
                <Link
                  className="group text-white text-decoration-none hover:text-gray-300 py-4"
                  href="/interviews"
                >
                  Administrera
                  <i className="bi bi-caret-down-fill ms-1"></i>
                </Link>
                <div className="hidden group-hover:block absolute bg-white mt-2 py-2 space-y-2 shadow-md rounded-md transition-transform duration-300 ease-in-out transform translate-y-[-10px]">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 2
                  </Link>
                </div>
              </div>
              <div className="group inline-block relative">
                <Link
                  className="group text-white text-decoration-none hover:text-gray-300 py-4"
                  href="/interviews"
                >
                  Manualer
                  <i className="bi bi-caret-down-fill ms-1"></i>
                </Link>
                <div className="hidden group-hover:block absolute bg-white mt-2 py-2 space-y-2 shadow-md rounded-md transition-transform duration-300 ease-in-out transform translate-y-[-10px]">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 2
                  </Link>
                </div>
              </div>
              <div className="group inline-block relative">
                <Link
                  className="group text-white text-decoration-none hover:text-gray-300 py-4"
                  href="/interviews"
                >
                  Frågeformulär
                  <i className="bi bi-caret-down-fill ms-1"></i>
                </Link>
                <div className="hidden group-hover:block absolute bg-white mt-2 py-2 space-y-2 shadow-md rounded-md transition-transform duration-300 ease-in-out transform translate-y-[-10px]">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 2
                  </Link>
                </div>
              </div>
              <div className="group inline-block relative">
                <Link
                  className="group text-white text-decoration-none hover:text-gray-300 py-4"
                  href="/interviews"
                >
                  Logotyper
                  <i className="bi bi-caret-down-fill ms-1"></i>
                </Link>
                <div className="hidden group-hover:block absolute bg-white mt-2 py-2 space-y-2 shadow-md rounded-md transition-transform duration-300 ease-in-out transform translate-y-[-10px]">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 text-decoration-none"
                  >
                    Item 2
                  </Link>
                </div>
              </div>{" "}
            </div>
            <div>
              <Link className="text-white text-decoration-none" href="/signup">
                <i className="bi bi-box-arrow-in-right me-1"></i>Logga In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
