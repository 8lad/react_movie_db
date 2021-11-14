import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, setPage } from "../../../store";
import { createUrl } from "../../../utils/createUrl";
export default function PaginationControlled() {
  const dispatch = useDispatch();
  const { total_pages, currentPage } = useSelector((state) => state.main);

  return (
    <Stack spacing={2} sx={{ padding: "20px", width: "100%" }}>
      <Pagination
        count={total_pages}
        page={currentPage}
        onChange={(e, value) => {
          dispatch(setPage(value));
          dispatch(fetchMovies(createUrl(value)));
        }}
      />
    </Stack>
  );
}
