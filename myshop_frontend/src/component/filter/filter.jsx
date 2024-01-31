import React from 'react';
import 'react-dropdown/style.css';
import Select from "react-select"
import FilterColor from './color';
import FilterPrice from './price';
import FilterSize from './size';

const Filter = () => {
  return (
    <div className="flex mt-10 mb-5 text-[#6b7c88] text-sm">
      <FilterColor />
      <FilterPrice />
      <FilterSize />
    </div>
  )
}

export default Filter;