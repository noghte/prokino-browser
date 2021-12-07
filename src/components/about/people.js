import React from 'react';
import { Link, withPrefix } from "gatsby"
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

export default function AboutPeople() {
    return (
        // <table width="620" border="0" cellpadding="0" cellspacing="0">
        //     <tbody><tr>
        //         <td width="615">
        <div>
            <h4 className="display-5" style={{ marginTop: '1rem' }}>People</h4>
                    <p>
                        ProKinO is a collaborative effort between the
                        Evolutionary Systems Biology Group Lab of Dr. Natarajan
                        Kannan at the Biochemistry and Molecular Biology
                        Department and Dr. Krys J. Kochut's lab at the Computer
                        Science Department, both at University of Georgia,
                        Athens, USA. Gurinder Gosal, also at UGA, created the
                        initial version of the software system to automatically populate ProKinO from the selected data sources.
                    </p>
            <h5 className="display-6" style={{ marginTop: '1rem' }}>Current Team Members</h5>

            <div className="row" style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/NatarajanKannan.jpg")} className="card-img-top" alt="Natarajan Kannan" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr. Natarajan Kannan</h6>
                            <div className="card-text text-black-50">PI <br /> BioInformatics</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/KrzysztofKochut.jpg")} className="card-img-top" alt="Krzysztof Kochut" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr. Krzysztof Kochut</h6>
                            <div className="card-text text-black-50">Co-PI  <br /> Computer Science</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/SaberSoleymani.jpg")} className="card-img-top" alt="Saber Soleymani" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Saber Soleymani</h6>
                            <div className="card-text text-black-50">Research Assistant<br /> Computer Science</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/NoPhoto.jpg")} className="card-img-top" alt="Amitabh Priyadarshi" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Nathan Gravel</h6>
                            <div className="card-text text-black-50">Research Assistant<br />Bioinformatics</div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row" style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: '2rem' }}>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                    <img src={withPrefix("/ui/people/GeorgeBendzunas.jpg")} className="card-img-top" alt="George Bendzunas" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">George Bendzunas</h6>
                            <div className="card-text text-black-50">Postdoctoral Scholar<br /> Bioinformatics</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                    <img src={withPrefix("/ui/people/ElikaBozorgi.jpg")} className="card-img-top" alt="Amitabh Priyadarshi" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Elika Bozorgi</h6>
                            <div className="card-text text-black-50">Teaching Assistant<br /> Computer Science</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                    <img src={withPrefix("/ui/people/AmitabhPriyadarshi.jpg")} className="card-img-top" alt="Amitabh Priyadarshi" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Amitabh Priyadarshi</h6>
                            <div className="card-text text-black-50">Research Assistant<br /> Computer Science</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                    <img src={withPrefix("/ui/people/SafalShrestha.jpg")} className="card-img-top" alt="Safal Shrestha" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Safal Shrestha</h6>
                            <div className="card-text text-black-50">Research Assistant<br /> BioInformatics</div>
                        </div>
                    </div>
                </div>
            </div>


            <h5 className="display-6" style={{ marginTop: '1rem' }}>Former Team Members</h5>
            <div className="row" style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: '2rem' }}>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/LiangChinHuang.jpg")} className="card-img-top" alt="Liang-Chin Huang" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr. Liang-Chin Huang</h6>
                            <div className="card-text text-black-50">Research Assistant <br /> BioInformatics</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/AbbasKeshavarzi.jpg")} className="card-img-top" alt="Abbas Keshavarzi" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr. Abbas Keshavarzi</h6>
                            <div className="card-text text-black-50">Research Assistant<br /> Computer Science</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/AnnieKwon.jpg")} className="card-img-top" alt="Annie Kwon" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr.Annie Kwon (IoB)</h6>
                            <div className="card-text text-black-50">Postdoctoral Scholar
                                <br />UCSF</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/DanielMcSkimming.jpg")} className="card-img-top" alt="Daniel McSkimming" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr. Daniel McSkimming (IoB)</h6>
                            <div className="card-text text-black-50">Director,
                                Bioinf. &amp;<br /> Comp. Biology, USF</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: '2rem' }}>

                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/ShimaDastgheib.jpg")} className="card-img-top" alt="Shima Dastgheib" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr. Shima Dastgheib (CS)</h6>
                            <div className="card-text text-black-50">Technical Lead<br /> Genentech/Roche</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/GurinderGosal.jpg")} className="card-img-top" alt="Gurinder Gosal" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Dr. Gurinder Gosal (CS)</h6>
                            <div className="card-text
              text-black-50">Researcher, Univ. of <br />British Columbia</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/ReshmiDe.jpg")} className="card-img-top" alt="Reshmi De" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Reshmi De (CS)</h6>
                            <div className="card-text text-black-50">Assistant Vice
                                President<br />Citibank, Canada</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/NoPhoto.jpg")} className="card-img-top" alt="Anish Narayanan" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Anish Narayanan, M.D. (IoB)</h6>
                            <div className="card-text text-black-50">Residency<br />UTHSC-San Antonio</div>
                        </div>
                    </div>
                </div>

                {/* <div className="col">
                    <div className="card border-0 shadow" style={{ width: '200px' }}>
                        <img src={withPrefix("/ui/people/NoPhoto.jpg")} className="card-img-top" alt="Bhargabi Chakrabarti" />
                        <div className="card-body text-center">
                            <h6 className="card-title mb-0">Bhargabi Chakrabarti (CS)</h6>
                            <div className="card-text text-black-50">Ph.D. Student,
                                ECE<br />George Mason Univ.</div>
                        </div>
                    </div>
                </div> */}



            </div>
        </div>

        //     </td>

        // </tr>
        // </tbody></table>
    )
}
