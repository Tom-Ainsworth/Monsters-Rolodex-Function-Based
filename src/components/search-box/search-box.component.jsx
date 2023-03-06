import "./search-box.styles.css";

import React from "react";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
	<input
		className={`${className} search-box`}
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
