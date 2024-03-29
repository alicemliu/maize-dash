import React from "react";
import Grid from '@material-ui/core/Grid';
import { Rnd } from "react-rnd";

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SettingsIcon from '@material-ui/icons/Settings';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import '../css/App.css';
import ToDoList from "./todolist";
import TimeDate from "./date";
import Timer from "./timer";
import QOTD from "./qotd";
import Weather from "./weather";
import MDining from "./mdining";
import Spotify from "./spotify"

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      right: false,
      showDate: true,
      showToDo: true,
      showTimer: true,
      showQOTD: true,
      showWeather: true,
      showMDining: true,
      showSpotify: false
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
    <h2>Toggle Widgets On/Off</h2>
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
          control={<Switch checked={this.state.showTimer} onChange={this.handleChange} name="showTimer" />}
          label="Timer"
        />
        <FormControlLabel
          control={<Switch checked={this.state.showQOTD} onChange={this.handleChange} name="showQOTD" />}
          label="Quote of the Day"
        />
        <FormControlLabel
          control={<Switch checked={this.state.showWeather} onChange={this.handleChange} name="showWeather" />}
          label="Weather"
        />
        <FormControlLabel
              control={<Switch checked={this.state.showMDining} onChange={this.handleChange} name="showMDining" />}
                  label="MDining"
        />
        <FormControlLabel
              control={<Switch checked={this.state.showSpotify} onChange={this.handleChange} name="showSpotify" />}
                  label="Spotify"
        />
        <br/><h2>Layout</h2>
        <FormControlLabel
              control={<Switch checked={this.state.editMode} onChange={this.handleChange} name="editMode" />}
                  label="Resize and Drag Mode"
        />
    </FormGroup>
    </div>
  );

 render() {
    return (
      <div>
        <header>
          <div className="left"><h1>MaizeDash</h1> </div>
          {this.state.editMode && <div className="edit-message"><p> <b>Resize and Drag Mode Enabled:</b> Hold and drag widgets to move them. Drag from the widget corners to resize. </p></div>}
          <div className="right">
            
            <Button className="right" onClick={this.toggleDrawer('right', true)}> 
            <SettingsIcon/>
           </Button>
           <h2 className="right">Layout</h2>

            <Drawer anchor={'right'} open={this.state['right']} onClose={this.toggleDrawer('right', false)}>
            {this.list('right')}
            </Drawer>
          </div>
        </header>
        <main>
          {this.state.showDate && 
           <Rnd
            enableResizing = {this.state.editMode}
            disableDragging = {!this.state.editMode}
            className="widget"
            default={{
              x: 0,
              y: 0,
              width: 380,
              height: 180
             }}
          >
            <TimeDate/> 
          </Rnd>}
          {this.state.showToDo && 
           <Rnd
            enableResizing = {this.state.editMode}
            disableDragging = {!this.state.editMode}
            className="widget"
            default={{
              x: 0,
              y: 200,
              width: 380,
              height: 330
             }}
          >
            <ToDoList/> 
          </Rnd>}
          {this.state.showQOTD && 
           <Rnd
            enableResizing = {this.state.editMode}
            disableDragging = {!this.state.editMode}
            className="widget"
            default={{
              x: 400,
              y: 200,
              width: 380,
              height: 280
             }}
          >
            <QOTD/> 
          </Rnd>}
          {this.state.showWeather && 
           <Rnd
            enableResizing = {this.state.editMode}
            disableDragging = {!this.state.editMode}
            className="widget"
            default={{
              x: 400,
              y: 0,
              width: 380,
              height: 180
             }}
          >
            <Weather/> 
          </Rnd>}
          {this.state.showTimer && 
           <Rnd
            enableResizing = {this.state.editMode}
            disableDragging = {!this.state.editMode}
            className="widget"
            default={{
              x: 800,
              y: 0,
              width: 520,
              height: 380
             }}
          >
            <Timer/> 
          </Rnd>}
          {this.state.showMDining && 
           <Rnd
            enableResizing = {this.state.editMode}
            disableDragging = {!this.state.editMode}
            className="widget"
            default={{
              x: 800,
              y: 400,
              width: 520,
              height: 270
             }}
          >
            <MDining/> 
          </Rnd>}
          {this.state.showSpotify && 
           <Rnd
            enableResizing = {this.state.editMode}
            disableDragging = {!this.state.editMode}
            className="widget"
            default={{
              x: 400,
              y: 500,
              width: 380,
              height: 425
             }}
          >
            <Spotify/> 
          </Rnd>}
        </main>
      </div>
    );
  }
}
