import React from "react";
import Grid from '@material-ui/core/Grid';

import '../css/App.css';
import ToDoList from "./todolist";
import TimeDate from "./date";

export default function Main() {
  return (
    <main>
      <Grid container='true' container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="widget"><TimeDate/></div>
          <div className="widget"><ToDoList/></div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="widget"><ToDoList/></div>
          <div className="widget"><ToDoList/></div>
        </Grid>
      </Grid>
    </main>
  );
}