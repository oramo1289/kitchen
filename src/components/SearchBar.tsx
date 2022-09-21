import React, { FC, useState } from "react";

import "./SearchBar.css";

export interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = "Search value",
  onChange,
}) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(event.target.value);

  const onCancelHandler = (): void => {
    if (onChange) onChange("");

    setValue("");
  };

  const onSearch = (): void => {
    if (onChange) onChange(value);
  };

  return (
    <div className={`${"search_button"} `}>
      <input
        onChange={onChangeHandler}
        value={value}
        type="text"
        placeholder={placeholder}
        data-testid="search-input"
      />
      {value.length > 0 && (
        <button
          type="button"
          className={[
            "material-icons",
            "search_button__icon_button",
            "search_button__icon_button--cancel_icon",
          ].join(" ")}
          onClick={onCancelHandler}
        >
          close
        </button>
      )}

      <button
        type="button"
        className={[
          "material-icons",
          "search_button__icon_button",
          "search_button__icon_button--search_icon",
        ].join(" ")}
        onClick={onSearch}
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
