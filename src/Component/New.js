import React, { useEffect, useState } from "react";
// import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: "id", headerName: "Id" },
  { field: "title", headerName: "Title" },
  { field: "body", headerName: "Body" },
];

const New = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
      });
  });
  return <h1>Data TAble</h1>;
};
export  default New;