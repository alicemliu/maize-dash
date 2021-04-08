import React from "react";
import Grid from '@material-ui/core/Grid';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import '../css/App.css';
import ToDoList from "./todolist";
import TimeDate from "./date";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      showDate: true,
      showToDo: true,
      item3: true,
    }

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleDrawer = (anchor, open) => (event) => {
    this.setState({ [anchor]: open });
  };

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  list = (anchor) => (
    <div
      id='menu'
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
    <FormGroup>
        <FormControlLabel
          control={<Switch checked={this.state.showDate} onChange={this.handleChange} name="showDate" />}
          label="Date and Time"
        />
        <FormControlLabel
          control={<Switch checked={this.state.showToDo} onChange={this.handleChange} name="showToDo" />}
          label="To Do List"
        />
        <FormControlLabel
          control={<Switch checked={this.state.item3} onChange={this.handleChange} name="item3" />}
          label="item3"
        />
    </FormGroup>
    </div>
  );

  render() {
    return (
      <main>
        <header>
          <div className="left"><h1>MaizeDash</h1></div>
          <div className="right">
            <Button onClick={this.toggleDrawer('right', true)}><MenuRoundedIcon/></Button>
            <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
            {this.list('right')}
            </Drawer>
          </div>
        </header>
        <Grid container='true' container spacing={2}>
          <Grid item xs={12} md={4}>
            { this.state.showDate && <div className="widget"><TimeDate/></div> }
            { this.state.showToDo && <div className="widget"><ToDoList/></div> }
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="widget"><ToDoList/></div>
            <div className="widget"><ToDoList/></div>
          </Grid>
        </Grid>
      </main>
    );
  }
}