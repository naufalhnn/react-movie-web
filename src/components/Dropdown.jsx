import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const RadixDropdown = () => {
  return (
    <div className='fixed left-20 top-6 w-56 text-right'>
      <Menu
        as='div'
        className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Movies
            <ChevronDownIcon
              className='ml-2 -mr-1 h-5 w-5 text-primary'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute left-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-800 border border-slate-600 text-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-700 ' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Trending
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-700 ' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Popular
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-700 ' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Recommendations
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default RadixDropdown;
