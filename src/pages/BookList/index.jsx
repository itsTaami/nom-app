import React from "react";
import Book from "../../components";
import { Grid } from "@mui/material";

const BookList = ({ books }) => {
  return (
    <Grid container>
      {books.map((book, i) => {
        return <Book book={book} id={i} />;
      })}
    </Grid>
  );
};

export default BookList;
