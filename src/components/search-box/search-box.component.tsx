import React, { ChangeEventHandler } from 'react';
import './search-box.styles.css';

//interface:

interface ISearchBoxProps {
  className?: string;
  placeholder: string; 
  onChangeHandler: ChangeEventHandler<HTMLInputElement>; 
}


const SearchBox: React.FC<ISearchBoxProps> = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);


// type:

// type SearchBoxProps2 = {
//   className?: string;
//   placeholder: string; 
//   onChangeHandler: ChangeEventHandler<HTMLInputElement>; 
// }

// const SearchBox2 = ({ className, placeholder, onChangeHandler } :SearchBoxProps2) => (
//   <input
//     className={`search-box ${className}`}
//     type='search'
//     placeholder={placeholder}
//     onChange={onChangeHandler}
//   />
// );


export default SearchBox;
