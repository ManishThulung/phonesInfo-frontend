import React from "react";
import phone from "../../public/images/phones/iphone-13-pro-max 2.png";
import Image from "next/image";

const phones = [
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
  {
    name: "iphone 13 pro max",
    image: phone,
  },
];

const seemore = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto  mt-20">
        <div className="grid xl:grid-cols-5 grid-cols-2 gap-16 border-l-[1px] border-gray-300 pl-5 xl:pl-20">
          {phones.map((phone) => {
            return (
              <>
                <div className="w-[140px] h-[150px]">
                  <Image
                    src={phone.image}
                    alt="My Image"
                    className="w-full h-full"
                  />
                  <h5 className="text-[14px] text-center">{phone.name}</h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="container flex px-[8%] justify-end  mt-10 mx-auto">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default seemore;
