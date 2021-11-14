import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres, fetchLanguages, fetchMovies } from "../../store/";
import { filterUrl, censureship } from "../../utils";
import { genreList, languageList, censor } from "../../variables";
import FilterSelect from "../../components/UI/FilterSelect/FilterSelect";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
const Filters = () => {
  const { genres, genresStatus, languages, languagesStatus } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();
  const [singleGenre, setSingleGenre] = useState("");
  const [singleLanguage, setSingleLanguage] = useState("");
  useEffect(() => {
    dispatch(fetchGenres(genreList));
    dispatch(fetchLanguages(languageList));
  }, [dispatch]);
  return genresStatus === "ok" && languagesStatus === "ok" ? (
    <Box sx={{ width: "100%", display: "flex", marginBottom: "10px" }}>
      <FilterSelect
        id="genreSelect"
        name="genreSelect"
        label="Genre"
        options={censureship(genres, censor)}
        optionValue={"id"}
        optionName={"name"}
        value={singleGenre}
        onChange={setSingleGenre}
      />
      <FilterSelect
        id="languageSelect"
        name="languageSelect"
        label="Language"
        options={languages}
        optionValue={"iso_639_1"}
        optionName={"english_name"}
        value={singleLanguage}
        onChange={setSingleLanguage}
      />
      <Box
        sx={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FilterListOutlinedIcon
          sx={{
            fontSize: 50,
            background: "#1976D2",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (singleLanguage || singleGenre) {
              dispatch(fetchMovies(filterUrl(singleGenre, singleLanguage)));
              setSingleGenre("");
              setSingleLanguage("");
            }
          }}
        />
      </Box>
    </Box>
  ) : null;
};

export default Filters;
