import { useState } from 'react';

export default function Search(props) {
  const { setFilteredProductList, productList } = props;
  const [searchValue, setSearchValue] = useState('');
  const filterResult = () => {
    const searchResult = productList.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredProductList(searchResult);
  };
  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') filterResult();
        }}
      />
      <button onClick={filterResult}>Search</button>
    </div>
  );
}
