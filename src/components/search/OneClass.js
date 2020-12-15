import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import useSWR, {SWRConfig} from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());
const url = "http://gumbo.cs.uga.edu:8080/prokinosrv/rest/classification/kinase";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function OneClass() {
  const classes = useStyles();
  const { data, error } = useSWR(url, fetcher);
  if (error) {
      return <span>Failed to load classes</span>
  }
  if (!data) {
      return <span>Loading...</span>
  }
  console.table(data);

  return (
    <Autocomplete
      id="prokino-oneclass"
      style={{ width: 300 }}
      options={data.subnodes[0].subnodes}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option.label}
      renderOption={option => (
        <>
          {option.label} :
          {option.name}
        </>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="Choose a class"
          variant="outlined"
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: 'disabled', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}