import React from "react";

function FilterSort({ category, setCategory, sortOption, setSortOption }) {
  return (
    <div className="filter-sort">
      <label>
        Filter by Category:
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Snacks">Snacks</option>
          <option value="Bakery">Bakery</option>
          <option value="Beverages">Beverages</option>
        </select>
      </label>
      <label>
        Sort by:
        <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
    </div>
  );
}

export default FilterSort;