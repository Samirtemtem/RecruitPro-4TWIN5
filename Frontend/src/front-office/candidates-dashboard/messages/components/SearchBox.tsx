import React from "react";

const SearchBox: React.FC = () => {
  return (
    <form method="post" action="#">
      <div className="form-group">
        <input type="search" name="search" placeholder="Search" required />
        <span className="icon la la-search"></span>
      </div>
    </form>
  );
};

export default SearchBox; 