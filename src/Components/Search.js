import { useState } from 'react';

export default function Search(props) {
  const { setFilteredProductList, productList } = props;
  const [searchValue, setSearchValue] = useState('');
  const filterResult = () => {
    const searchResult = productList.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredProductList(searchResult);
  };
  return (
    <div className="m-4">
      <input
        className="px-1 border border-solid border-black"
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') filterResult();
        }}
      />
      <button className="mx-2 px-4 bg-cyan-100 border rounded-lg hover:cursor-pointer" onClick={filterResult}>
        Search
      </button>
    </div>
  );
}
