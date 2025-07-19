import React, { useState, useMemo, useEffect } from "react";
import mockProducts from "./assets/mockProducts";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import "./App.css";

const getCategories = (products) => [
  ...new Set(products.map((p) => p.category)),
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [minRating, setMinRating] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("finditfast_user");
    if (stored) setUser(stored);
  }, []);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("finditfast_user");
    setUser(null);
  };

  const categories = useMemo(() => getCategories(mockProducts), []);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      if (
        search &&
        !product.title.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      if (category && product.category !== category) {
        return false;
      }
      if (price === "under50" && product.price >= 50) return false;
      if (price === "50to100" && (product.price < 50 || product.price > 100))
        return false;
      if (price === "over100" && product.price <= 100) return false;
      if (minRating && product.rating < minRating) return false;
      return true;
    });
  }, [search, category, price, minRating]);

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1100, margin: "0 auto", padding: "0 2vw" }}>
          <div>
            <h1 style={{ marginBottom: 0 }}>FindItFast</h1>
            <p style={{ marginTop: 4 }}>Browse, search, and filter products instantly</p>
          </div>
          <div>
            <span style={{ marginRight: 16, color: "#dbeafe", fontWeight: 500 }}>Hi, {user}</span>
            <button onClick={handleLogout} className="login-btn" style={{ padding: "0.4rem 1rem", fontSize: 15 }}>Logout</button>
          </div>
        </div>
      </header>
      <main className="app-main">
        <div className="filters-bar">
          <div className="search-bar-wrapper">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Filters
            categories={categories}
            selectedCategory={category}
            onCategoryChange={(e) => setCategory(e.target.value)}
            selectedPrice={price}
            onPriceChange={(e) => setPrice(e.target.value)}
            minRating={minRating}
            onRatingChange={(e) =>
              setMinRating(e.target.checked ? 4 : null)
            }
          />
        </div>
        <ProductList products={filteredProducts} />
      </main>
      <footer className="app-footer">
        &copy; {new Date().getFullYear()} FindItFast. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
