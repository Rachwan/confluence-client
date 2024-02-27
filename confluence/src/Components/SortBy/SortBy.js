import React from "react";
import styles from "./SortBy.module.css";

export default function SortBy({ sortValue, onSort }) {
  const options = [
    { label: "Default sorting", value: "Default sorting" },
    { label: "By latest joined", value: "By latest joined" },
    { label: "By Followers: low to high", value: "By Followers: low to high" },
    { label: "By Followers: high to low", value: "By Followers: high to low" },
  ];
  const handleChange = (event) => {
    const sortValue = event.target.value;
    onSort(sortValue);
  };

  return (
    <form className={styles.form} method="get">
      <select value={sortValue} onChange={handleChange} class={styles.select}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </form>
  );
}
