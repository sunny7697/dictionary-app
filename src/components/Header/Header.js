import React from "react";
import "./Header.css";
import {
  createMuiTheme,
  TextField,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import categories from "../../data/Category";

function Header({
  category,
  setCategory,
  word,
  setMeanings,
  setWord,
  lightMode,
}) {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary App"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <TextField
            select
            className="select"
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
