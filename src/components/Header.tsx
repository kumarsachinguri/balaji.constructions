import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Header = () => {
  const navigation = [
    { name: "Home", href: "/home", current: true },
    { name: "Portfolio", href: "/portfolio", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className='bg-amber-50'>
      <Disclosure as='nav' className='bg-amber-50'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
              {/* Mobile menu button*/}
              <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-amber-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon
                  aria-hidden='true'
                  className='block h-6 w-6 group-data-[open]:hidden'
                />
                <XMarkIcon
                  aria-hidden='true'
                  className='hidden h-6 w-6 group-data-[open]:block'
                />
              </DisclosureButton>
            </div>
            <div className='flex items-center justify-between w-full'>
              <div className='flex flex-shrink-0 items-center'>
                <img src='images/logo-bc.png' alt='Logo' className='w-10' />
                <p className='flex flex-col'>
                  <strong className='block font-black leading-4 text-red-600'>
                    Bala ji
                  </strong>
                  <strong className='block font-black leading-4 text-green-500'>
                    Constructions
                  </strong>
                </p>
              </div>
              <div className='hidden sm:ml-6 sm:block ms-auto'>
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "text-amber-400"
                          : "text-slate-400 hover:text-amber-300",
                        "rounded-md px-3 py-2 text-sm font-bold"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className='sm:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as='a'
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-amber-400"
                    : "text-gray-300 hover:text-amber-300",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
};

export default Header;
