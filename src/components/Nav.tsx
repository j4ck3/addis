"use server";
import React from "react";
import Image from "next/image";
import logo from "../content/images/static/addis_logo.png";
import Link from "next/link";

import { auth } from "@/auth";

export default async function Nav() {
  const session = await auth();

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image className="my-2" src={logo} alt="addis" width={100} height={50} />
            <Link href="#" className="text-decoration-none text-black text-sm">
              Sv<i className="bi bi-caret-down-fill ms-1"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-theme">
        <div className="container">
          <div className="flex py-4 justify-between">
            <div className="space-x-14 text-sm">
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
              </div>
            </div>
            <div>
            {session === null ? (
                <a className="text-green-700 text-sm bg-white px-3 py-2 rounded" href="/api/auth/signin">Logga in</a>
              ) : (
                <>
                  {/* <span className="text-white text-sm me-2">{session?.user?.email}</span> */}
                  <a className="text-green-700 text-sm bg-white px-3 py-2 rounded" href="/api/auth/signout"> Logga ut</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
