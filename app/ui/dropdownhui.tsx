'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { MdFilterList } from "react-icons/md";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FeedFilterDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-900">
          <MdFilterList className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <h1 className='text-white ml-3 capitalize'>PREFERENCES</h1>
            <hr />
            <h1 className='text-white ml-3 capitalize'>SHOW FROM</h1>
            <hr />

            <div className="flex items-center mb-2 ml-2 mt-2">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-black bg-black border-gray-300"
                />
                <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                >
                    Others
                </label>
            </div>
            <div className="flex items-center ml-2 mb-2">
                <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-black bg-black border-gray-300"
                />
                <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Your Orbit
                </label>
            </div>

            <hr />
            <h1 className='text-white ml-3 capitalize'>FEED CONTENT</h1>
            <hr />

            <div className="flex items-center mb-2 ml-2 mt-2">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-black bg-black border-gray-300"
                />
                <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                >
                    Rants
                </label>
            </div>
            <div className="flex items-center ml-2 mb-2">
                <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-black bg-black border-gray-300"
                />
                <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Daily Journal
                </label>
            </div>

            <hr />
            <h1 className='text-white ml-3 capitalize'>SORT BY</h1>
            <hr />

            <div className="flex items-center mb-2 ml-2 mt-2">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-black bg-black border-gray-300"
                />
                <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                >
                    Recommended
                </label>
            </div>
            <div className="flex items-center ml-2 mb-2">
                <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-black bg-black border-gray-300"
                />
                <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Latest Feed
                </label>
            </div>

            <div className="flex items-center ml-2 mb-2">
                <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-black bg-black border-gray-300"
                />
                <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Popularity
                </label>
            </div>

            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-black text-white' : 'text-gray-500',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-black text-white' : 'text-gray-500',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-black text-white' : 'text-gray-500',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm border-b-white'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

