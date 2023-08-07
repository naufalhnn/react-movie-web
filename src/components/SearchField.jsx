import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const SearchField = () => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search film or tv show'
        className='w-64 px-5 py-2 rounded bg-slate-800 outline outline-1 outline-primary text-primary '
      />
      <button className='bg-primary px-5 py-3 mx-2 rounded hover:bg-yellow-500 transition ease-in-out duration-300'>
        <MagnifyingGlassIcon />
      </button>
    </div>
  );
};

export default SearchField;
