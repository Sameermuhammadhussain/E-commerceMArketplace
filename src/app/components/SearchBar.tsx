// components/SearchBar.tsx
"use client";

import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const suggestionsData = ["sofa", "chair", "table", "bed"];

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Update filtered suggestions whenever inputValue changes
  useEffect(() => {
    if (inputValue.trim() !== "") {
      const filtered = suggestionsData.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestionsData);
    }
  }, [inputValue]);

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    // Delay hiding to allow onMouseDown to register on suggestion click
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search for products..."
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="border border-gray-300 p-2 rounded w-full"
      />
      {showSuggestions && (
        <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-60 overflow-y-auto z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onMouseDown={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
