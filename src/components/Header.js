import React from "react";
import Search from "./Search";

function Header({searchFunction, search}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchFunction={searchFunction} search={search}/>
    </header>
  );
}

export default Header;
