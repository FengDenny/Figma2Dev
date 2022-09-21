import React, { useEffect, useRef, useState } from "react";
import styles from "./Searchbar.module.scss";
import { FaSearch } from "react-icons/fa";
export default function Searchbar() {
  return (
    <div className={styles.content}>
      <form className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          aria-label='search'
          type='text'
          name='search'
          placeholder='Search '
        />
        <button className={styles.searchBtn} aria-label='submit search'>
          <FaSearch className={styles.searchIcon} size={20} />
        </button>
      </form>
    </div>
  );
}
