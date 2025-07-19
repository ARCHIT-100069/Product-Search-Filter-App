import React from "react";

const Filters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
  minRating,
  onRatingChange,
}) => (
  <div className="filters-controls">
    <select
      value={selectedCategory}
      onChange={onCategoryChange}
      className="filters-select"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
    <select
      value={selectedPrice}
      onChange={onPriceChange}
      className="filters-select"
    >
      <option value="">All Prices</option>
      <option value="under50">Under ₹50</option>
      <option value="50to100">₹50–₹100</option>
      <option value="over100">Over ₹100</option>
    </select>
    <label className="filters-checkbox">
      <input
        type="checkbox"
        checked={minRating === 4}
        onChange={onRatingChange}
      />
      4+ Stars
    </label>
  </div>
);

export default Filters; 