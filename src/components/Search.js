import React from "react";

function Search({searchFunction, search}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }



  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={searchFunction}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
