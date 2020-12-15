import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import OneClass from './OneClass'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function SearchOptions() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    matchAll: false,
    matchAny: false,
    startingWith: false,
    searchInOneClass:false
  });
  
  const [oneClassName,setOneClassName] = React.useState('');

  const handleChange = (event) => {
    setState({  [event.target.name]: event.target.checked });
  };

  const { matchAll, startingWith, matchAny, searchInOneClass } = state;
  
  const error = [matchAll, matchAny, startingWith].filter((v) => v).length !== 1;
  return (
    <div className={classes.root}>
      <FormControl required component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={matchAll} onChange={handleChange} name="matchAll" />}
            label="Match All"
          />
          <FormControlLabel
            control={<Checkbox checked={matchAny} onChange={handleChange} name="matchAny" />}
            label="Match Any"
          />
          <FormControlLabel
            control={<Checkbox checked={startingWith} onChange={handleChange} name="startingWith" />}
            label="Starting With"
          />
           <FormControlLabel
            control={<Checkbox checked={searchInOneClass} onChange={handleChange} name="searchInOneClass" />}
            label="Search in One Class"
          />
        </FormGroup>
        <FormHelperText>Please select a search option</FormHelperText>
      </FormControl>
      <FormControl error={error} component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Choose a class</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={<OneClass />}
          />
          {/* <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          /> */}
        </FormGroup>
        {/* <FormHelperText>You can display an error</FormHelperText> */}
      </FormControl>
    </div>
  );
}