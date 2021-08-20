import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const Dropdown = ({ options, indicator, width, setDropdownState }) => {
  // takes a list of options, indicator (e.g. Region), width, and a 'set state' function
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className={`${width} top-16`}>
      <Listbox
        value={selected.name}
        onChange={(e) => {
          setSelected(e);
          setDropdownState(e);
          console.log(e);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="text-white font-semibold border-2 border-gray-700 relative w-full py-2 pl-3 pr-10 text-center bg-white bg-opacity-5 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm hover:bg-opacity-20">
            <span className="block truncate filter drop-shadow-white">{`${indicator} ${selected.name}`}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* display all options */}
            <Listbox.Options className="absolute w-full py-1 mt-1 backdrop-filter backdrop-blur-sm filter drop-shadow-gray-sm overflow-auto text-base text-white font-semibold bg-white bg-opacity-10 rounded-xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `${active ? "text-white bg-amber-100" : "text-white"}
                          cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-white hover:bg-opacity-40`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate text-white`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${active ? "text-white" : "text-white"}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
