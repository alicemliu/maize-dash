import React from "react";

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

import '../css/App.css';

export default function Header() {
  const [state, setState] = React.useState({
    right: false,
    item1: true,
    item2: false,
    item3: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ [anchor]: open });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const list = (anchor) => (
    <div
      id='menu'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.item1} onChange={handleChange} name="item1" />}
          label="item1"
        />
        <FormControlLabel
          control={<Switch checked={state.item2} onChange={handleChange} name="item2" />}
          label="item2"
        />
        <FormControlLabel
          control={<Switch checked={state.item3} onChange={handleChange} name="item3" />}
          label="item3"
        />
    </FormGroup>
    </div>
  );

  return (
    <header>
      <div className="left"><h1>MaizeDash</h1></div>
      <div className="right">
        <Button onClick={toggleDrawer('right', true)}><MenuRoundedIcon/></Button>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </div>
    </header>
  );
}