import Layout from '../components/Layout';
import React, { useState } from 'react';
import PhosformerResult from '../components/prokino/PhosphormerResult';
// import KinaseTree from '../components/prokino/KinaseTree';

import { Button } from 'reactstrap';
export default function Phosformer() {
  const [kinase, setKinase] = useState("");
  const [peptide, setPeptide] = useState("");
  const [shouldShowResults, setShouldShowResults] = useState(false);

  function executeQuery(event) {
    event.preventDefault()

    // if (queryObject.query.trim().length === 0) {
    //     alert('No query entered.');
    //     return;
    // }
    setShouldShowResults(kinase.length > 0 && peptide.length == 11);
  }
  function peptideChanged(evt) {
    const s = evt.target.value;
    setPeptide(s);
    console.log("peptide=", s)
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
          Kinase sequence: <br />
          <textarea
            rows="6"
            colss="50"
            style={{ width: '30rem' }}
            name="query"
            placeholder="Kinase string..."
            onChange={kinaseChanged}
          // value={kinase}
          />
        </p>

        Peptide sequence: <br />
        <input
            style={{ width: '30rem' }}
            name="query"
            placeholder="Peptide sequence..."
            onChange={peptideChanged}
          // value={peptide}
          />
        {/* <KinaseTree /> */}
    <hr />


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
      <p>
      <br />
        <span style={{ fontWeight: 'bold' }}> Kinase sequence example:</span>
        <pre>
          <div style={{ whiteSpace: "pre-wrap", fontStyle: "italic" }}>YTNLSYIGEGAYGMVCSAYDNVNKVRVAIKKISPFEHQTYCQRTLREIKILLRFRHENIIGINDIIRAPTIEQMKDVYIVQDLMETDLYKLLKTQHLSNDHICYFLYQILRGLKYIHSANVLHRDLKPSNLLLNTTCDLKICDFGLARVADPDHDHTGFLTEYVATRWYRAPEIMLNSKGYTKSIDIWSVGCILAEMLSNRPIFPGKHYLDQLNHILGILGSPSQEDLNCIINLKARNYLLSLPHKNKVPWNRLFPNADSKALDLLDKMLTFNPHKRIEVEQALAHPYL</div>
        </pre>
        <br />
        <span style={{ fontWeight: 'bold' }}> Peptide sequence example:</span>
        <pre>
          <div style={{ whiteSpace: "pre-wrap", fontStyle: "italic" }}>LLKLASPELER</div>
        </pre>
        <small>        Peptide sequence has a length of 11, the center character should be either S, T, or Y
            other characters should be based on a list. </small>

        </p>

 
      </div>
    </div>
    <div className="row">
      <div className="col">
        {shouldShowResults && <PhosformerResult kinase={kinase} peptide={peptide} />}
      </div>
    </div>
  </Layout>)
}