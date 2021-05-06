import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CifOptions(props) {
  
  // const [selectedOption, setSelectedOption] = React.useState(props.options[0]);
  function selectedOptionChanged(event) {
    //const cifPath = `/cif/${cif["relativeDirectory"]}/${cif["name"]}.cif`// cif/Atypical_Atypical_O00329_PK3CD/Atypical_Atypical_O00329_PK3CD_r0.cif

    // let selectedOption = "";
    // if (event.target.value == "r0")
    //     selectedOption = "/cif/ePK_CAMK_O94768_ST17B/ePK_CAMK_O94768_ST17B_r0.cif";
    // else if (event.target.value == "r1")
    //     selectedOption = "/cif/ePK_TK_P00533_EGFR/ePK_TK_P00533_EGFR_r1.cif";
    // else if (event.target.value == "r2")
    //     selectedOption = "/cif/eLK_eLK_O14730_RIOK3/eLK_eLK_O14730_RIOK3_r0.cif";

    props.onChange(event.target.value) //sends the value to the caller's onChange
  }


  let cifList = props.options && props.options.length > 0
  && props.options.map((item, i) => {
    const nameParts = item.name.split("_");
    const optionLabel = nameParts.length>5 ? `Uniprot Id: ${nameParts[2]}, Pdb Id: ${nameParts[5]}`:`Clear`;
  return (
    <option key={i} value={`/cif/${item["relativeDirectory"]}/${item["name"]}.cif`}>{optionLabel}</option>
  )
}, this);

  return (
    <div className="col-auto">
      <select className="form-control " id="cifsearch1" value={props.cifPath} onChange={selectedOptionChanged}>
          {cifList}
    </select>
      
    </div>
  );
}