import './SearchBar.css';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { CityApiOptions, CityApiUrl } from '../../api/cityApi';

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const response = await fetch(CityApiUrl + inputValue, CityApiOptions);
    const result = await response.json();
    return {
      options: result.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.country}, ${city.region}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className='search-bar-block'>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
        <path d="M28 28L23.3333 23.3333M22.6667 13.3333C22.6667 14.559 22.4253 15.7727 21.9562 16.905C21.4872 18.0374 20.7997 19.0663 19.933 19.933C19.0663 20.7997 18.0374 21.4872 16.905 21.9562C15.7727 22.4253 14.559 22.6667 13.3333 22.6667C12.1077 22.6667 10.894 22.4253 9.76162 21.9562C8.62925 21.4872 7.60035 20.7997 6.73367 19.933C5.86699 19.0663 5.1795 18.0374 4.71046 16.905C4.24141 15.7727 4 14.559 4 13.3333C4 10.858 4.98333 8.48401 6.73367 6.73367C8.48401 4.98333 10.858 4 13.3333 4C15.8087 4 18.1827 4.98333 19.933 6.73367C21.6833 8.48401 22.6667 10.858 22.6667 13.3333Z" stroke="#5E5E5E" stroke-width="2" stroke-linecap="round" />
      </svg>
      <AsyncPaginate
        placeholder="Search your location"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="search-bar"
        classNamePrefix="search-bar"
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            cursor: 'text',
            fontSize: '18px',
            paddingLeft: '72px',
            color: 'var(--text-color)',
            borderRadius: '36px',
            border: 'none',
            boxShadow: 'none',
            background: 'var(--border-color)',
            width: '333px',
            height: '56px',
            display: 'flex',
            transition: null,
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            cursor: 'text',
            fontSize: '18px',
            color: state.isFocused ? 'var(--text-secondary-color)' : 'var(--text-placeholder-color)',
            transition: 'color 0.2s ease-in-out',
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
            color: 'var(--text-placeholder-color)',
            transition: null,
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            fontSize: '18px',
            color: 'var(--text-secondary-color)',
            transition: null,
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            borderRadius: '36px',
            boxShadow: 'none',
            color: 'var(--text-color)',
            background: 'var(--secondary-color)',
            border: '1px solid var(--text-placeholder-color)',
            overflow: 'hidden',
            width: '335px',
            transition: null,
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            cursor: 'pointer',
            borderRadius: '36px',
            border: 'none',
            boxShadow: 'none',
            color: 'var(--text-color)',
            background: 'var(--secondary-color)',
            width: '333px',
          }),
          transition: null,
        }}
      />
    </div>
  );
};

export default Search;