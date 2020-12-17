import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

export default function OneClassSearchResult({data}) {
    const useStyles = makeStyles({
        option: {
          fontSize: 15,
          '& > span': {
            marginRight: 10,
            fontSize: 18,
          },
        },
      });
      const classes = useStyles();
      debugger;
      
return(
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
