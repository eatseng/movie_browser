import React from 'react';
import TypeaheadRow from './TypeaheadRow.react'

import {useHistory} from "react-router-dom";

import './SearchBar.css';

const {useCallback, useEffect, useMemo, useState} = React;

const NUMBER_TYPEAHEAD_DISPLAYED = 5;

function SearchBar(props) {
  const [isShowTypeahead, setIsShowTypeahead] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [searchIndex, setSearchIndex] = useState(null);

  const history = useHistory();

  const typeaheadList = useMemo(() => {
    return searchString !== ''
      ? props.movies.filter(
          movie => movie.title.toUpperCase().includes(searchString.toUpperCase())
        )
      : [props.movies];
  }, [props.movies, searchString]);

  const onChangeHandler = useCallback((event) => {
    setSearchString(event.target.value)
    setSearchIndex(null);
    setIsShowTypeahead(true);
  }, [setSearchString])

  const onClickHandler = useCallback((searchIndex) => () => {
    history.push({
      pathname: '/movie',
      search: `?id=${typeaheadList[searchIndex].id}`,
    });
    setSearchIndex(null);
    setIsShowTypeahead(false);
  }, [typeaheadList])

  useEffect(() => {
    const keyHandler = (event) => {
      switch (event.code) {
        case 'ArrowDown':
          if (
            isShowTypeahead === true && 
            (searchIndex == null ||
            searchIndex < NUMBER_TYPEAHEAD_DISPLAYED - 1)
          ) {
            setSearchIndex(searchIndex == null ? 0 : searchIndex + 1);
          }
          break;
        case 'ArrowUp':
          if (isShowTypeahead === true && searchIndex >= 0) {
            setSearchIndex(searchIndex - 1);
          }
          break;
        case 'Enter': 
          if (searchIndex == null) {
            // If using search bar function
            props.onChange(
              searchString !== '' 
                ? typeaheadList
                : props.movies,
            );
            setIsShowTypeahead(false);
          } else {
            // If cycling through list of typeahead
            onClickHandler(searchIndex)();
          }
          break;          
        default:
      }
    };
    document.addEventListener('keyup', keyHandler)
    return () => document.removeEventListener('keyup', keyHandler);
  }, [
    isShowTypeahead,
    onClickHandler,
    props,
    props.onChange,
    searchIndex,
    searchString,
    typeaheadList,
  ]);

  return (
    <>
      <input
        className="searchBar"
        onChange={onChangeHandler}
        placeholder="Search for a movie"
        type="text" 
        value={searchString}
        />
      {
        (
          isShowTypeahead === true && searchString !== '' 
            ? typeaheadList
            : []
        )
        .map((movie, index) =>
          <TypeaheadRow 
            {...movie}
            isSelected={index === searchIndex}
            key={movie.id}
            onClick={onClickHandler(index)} 
            />
        )
        .slice(0, NUMBER_TYPEAHEAD_DISPLAYED)
      }
    </>
  );
}

export default SearchBar;
