import React, { useState } from "react";
import styles from "./Searchbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../redux/slice/search/search-slice";

export default function Searchbar() {
  const navigate = useNavigate();

  const [searchTitle, setSearchTitle] = useState();
  const dispatch = useDispatch();

  const handleIncomingDispatch = (event) => {
    event.preventDefault();
    dispatch(searchAction.searchTitle({ title: searchTitle }));
  };

  return (
    <div className={styles.content}>
      <form className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          aria-label='search'
          type='text'
          name='search'
          placeholder='Search '
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <button
          className={styles.searchBtn}
          aria-label='submit search'
          onClick={(e) => {
            handleIncomingDispatch(e);
            navigate("/search");
          }}
        >
          <FaSearch className={styles.searchIcon} size={20} />
        </button>
      </form>
    </div>
  );
}
