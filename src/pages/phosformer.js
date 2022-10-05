import Layout from '../components/Layout';
import React, { useState } from 'react';
import PhosformerResult from '../components/prokino/PhosphormerResult';
import { Button } from 'reactstrap';
export default function Phosformer() {
  const [kinase, setKinase] = useState("");
  const [substrate, setSubstrate] = useState("");
  const [shouldShowResults, setShouldShowResults] = useState(false);

  function executeQuery(event) {
    event.preventDefault()

    // if (queryObject.query.trim().length === 0) {
    //     alert('No query entered.');
    //     return;
    // }
    setShouldShowResults(kinase.length > 0 && substrate.length > 0);
  }
  function substrateChanged(evt) {
    const s = evt.target.value;
    setSubstrate(s);
    console.log("substrate=", s)
  }
  function kinaseChanged(evt) {
    const s = evt.target.value;
    setKinase(s);
    console.log("kinase=", s)
  }
  return (<Layout>
    <div className="row">
      <h3 className="display-5">Phosformer Prediction</h3>
      <div className="col">
        <p>
          Kinase: <br />
          <input
            style={{ width: '30rem' }}
            name="query"
            placeholder="Kinase string..."
            onChange={kinaseChanged}
            // value={kinase}
          />
        </p>
        <p>
          Substrate: <br />
          <input
            style={{ width: '30rem' }}
            name="query"
            placeholder="Substrate string..."
            onChange={substrateChanged}
            // value={substrate}
          />
        </p>
        <br />
        <span> Example: </span>
        kinase: YTNLSYIGEGAYGMVCSAYDNVNKVRVAIKKISPFEHQTYCQRTLREIKILLRFRHENIIGINDIIRAPTIEQMKDVYIVQDLMETDLYKLLKTQHLSNDHICYFLYQILRGLKYIHSANVLHRDLKPSNLLLNTTCDLKICDFGLARVADPDHDHTGFLTEYVATRWYRAPEIMLNSKGYTKSIDIWSVGCILAEMLSNRPIFPGKHYLDQLNHILGILGSPSQEDLNCIINLKARNYLLSLPHKNKVPWNRLFPNADSKALDLLDKMLTFNPHKRIEVEQALAHPYL
        <br /> 
        substrate: TEYVATRWYRA
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Button className="btn btn-primary" aria-label="Execute" onClick={executeQuery}>
          Execute
        </Button>
      </div>
    </div>
    <div className="row">
      <div className="col">
        {shouldShowResults && <PhosformerResult kinase={kinase} substrate={substrate} />}
      </div>
    </div>
  </Layout>)
}