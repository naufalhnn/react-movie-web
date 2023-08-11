import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { getSearchMovie } from '../services/movie.service';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';

const SearchField = () => {
  const [search, setSearch] = useState();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSearch = (e) => {
    setSearch(e);
  };

  const handleSubmitSearch = async () => {
    await getSearchMovie(search);
    closeModal();
  };

  return (
    <div>
      <button
        className='bg-transparent px-3 py-3 mx-2 rounded-lg hover:bg-slate-900 transition ease-in-out duration-300'
        onClick={openModal}>
        <MagnifyingGlassIcon className='text-primary w-7 h-7' />
      </button>

      <Transition
        appear
        show={isOpen}
        as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50'
          onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='flex min-h-fit xl:items-center justify-center mt-20 p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='Click to search movie'
                      className='w-full px-5 py-2 rounded bg-slate-800 outline outline-1 outline-primary text-primary '
                      onChange={({ target }) => {
                        handleSearch(target.value);
                      }}
                    />
                  </div>

                  <div className='mt-4'>
                    <Link to={`/search/${search}`}>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-slate-800 hover:bg-primary/80 transition ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2'
                        onClick={handleSubmitSearch}>
                        Search
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SearchField;
