import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Select = ({ event, data }) => {
  const [country] = useState(data);
  const [selected, setSelected] = useState(country[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-pointer border border-blue-500 bg-transparent py-2 pl-3 pr-10 text-left text-blue-500 font-secondary shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <span className="block text-sm">{selected}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <IoIosArrowUp
                    className={`h-5 w-5 text-gray-400 transform ${
                      !open ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-300"
                enter="transition ease-in duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {country.map((country, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-primary text-black" : "text-gray-900",
                          "relative cursor-pointer select-none"
                        )
                      }
                      value={country}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate py-2 pl-8 pr-4"
                            )}
                            onClick={e => {
                              event(e);
                            }}
                          >
                            {country}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-black" : "text-primary",
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <FaCheck
                                className="h-4 w-4 text-green-500"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default Select;
