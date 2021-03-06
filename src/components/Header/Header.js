import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="shadow bg-gradient-to-r from-red-600 to-purple-600 fixed w-full"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6 items-center">
                  <div className="flex space-x-4">
                    <a href="#home" className="text-white">
                      Home
                    </a>
                    <a href="#about" className="text-white">
                      About
                    </a>
                    <a href="#projects" className="text-white">
                      Projects
                    </a>
                    <a href="#contact" className="text-white">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              <Disclosure.Button className=" text-left text-white bg-black px-2 rounded-md">
                <a href="#home">Home</a>
              </Disclosure.Button>
              <Disclosure.Button className=" text-left text-white bg-black px-2 rounded-md">
                <a href="#about">About</a>
              </Disclosure.Button>
              <Disclosure.Button className=" text-left text-white bg-black px-2 rounded-md">
                <a href="#projects">Projects</a>
              </Disclosure.Button>
              <Disclosure.Button className=" text-left text-white bg-black px-2 rounded-md">
                <a href="#contact">Contact</a>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
