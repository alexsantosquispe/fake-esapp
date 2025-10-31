import { memo, useEffect, useState } from 'react';

import { SELECT_COLUMNS } from '../../utils/constants';

interface SearchBarProps {
  placeholder: string;
  onChange: (value: string, column: string) => void;
  time?: number;
}

const SearchBar = ({ placeholder, onChange, time = 700 }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(SELECT_COLUMNS[0].value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(searchValue, selectedColumn);
    }, time);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, selectedColumn, time]);

  return (
    <div className="focus-within:border-primary focus-within:ring-primary relative flex w-full rounded-lg border border-neutral-200 pr-2 transition-all focus-within:ring-1 md:w-fit">
      <input
        type="search"
        className="w-full py-2 pr-2 pl-4 focus:outline-none"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <select
        className="w-32 border-l border-neutral-200 bg-transparent px-2 py-2 focus:outline-none"
        value={selectedColumn}
        onChange={(e) => setSelectedColumn(e.target.value)}
      >
        {SELECT_COLUMNS.map((column) => (
          <option key={column.value} value={column.value}>
            {column.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(SearchBar);
