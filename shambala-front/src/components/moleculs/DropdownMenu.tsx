import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Link from "next/link";
import Button from "@components/atoms/Button";

export interface MenuItem {
  label: string;
  href?: string;
  external?: true;
  badge?: string;
  children?: MenuSubItem[];
  onClick?: () => void;
}

export interface MenuSubItem {
  path?: string;
  title: string;
  onClick?: () => void;
}

export interface DropdownMenuProps {
  menu: MenuItem;
  items: MenuSubItem[];
  mobile?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}
          >
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95"
          >
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}
            >
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => {
                      if (!item.path) {
                        return (
                          <Button
                            className={cx([
                              "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                              { "text-blue-500": active },
                              {
                                "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300":
                                  !active,
                              },
                            ])}
                            onClick={item?.onClick}
                          >
                            {item.title}
                          </Button>
                        );
                      }
                      return (
                        <Link
                          href={item?.path ? item.path : "#"}
                          className={cx([
                            "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                            { "text-blue-500": active },
                            {
                              "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300":
                                !active,
                            },
                          ])}
                        >
                          <span> {item.title}</span>
                        </Link>
                      );
                    }}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default DropdownMenu;
