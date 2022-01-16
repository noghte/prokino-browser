import Layout from '../components/Layout';
import React, {useState,useEffect} from "react"
// import {MailService} from '@sendgrid/mail'


export default function Feedback() {
    const [emailApiKey,setEmailApiKey] = useState("");
useEffect(()=>{
    if (typeof window === 'undefined' && process.env)
        setEmailApiKey(process.env.GATSBY_EMAIL_API_KEY)
  })

    function sendEmail(e)
    {
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(emailApiKey)

            const msg = {
            to: 'postorder@gmail.com', // Change to your recipient
            from: 'saber.s@uga.edu', // Change to your verified sender
            subject: 'Sending with SendGrid',
            text: 'test of text',
            html: '<strong>with html formatting</strong>',
            }
            
            sgMail
            .send(msg)
            .then((response) => {
                console.log(response[0].statusCode)
                console.log(response[0].headers)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (<Layout>

        <div id="top" className="container mbr-black">
            <div>
                <div className="title col-12 col-md-12">
                    <h4 className="display-5">Feedback</h4>

                </div>
            </div>
            {/* <!--Section: Contact v.2--> */}
<section className="mb-4" style={{backgroundColor:'#fff'}}>

    {/* <!--Section heading--> */}
    {/* <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2> */}
    {/* <!--Section description--> */}
    {/* <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p> */}

    <div className="row" style={{maxWidth:'1200px'}}>

        {/* <!--Grid column--> */}
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form"  method="POST">

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control" />
                        </div>
                    </div>
                    {/* <!--Grid column-->

                    <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                           <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control" />
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                        <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control" />
                        </div>
                    </div>
                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-12">

                        <div className="md-form">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div className="text-center text-md-left" style={{marginTop:'1rem'}}>
                <a className="btn btn-primary" onClick={(e)=>sendEmail()}>Send</a>
            </div>
            <div className="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Institute of Bioinformatics</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>A318 Life Sciences Building, 120 E. Green, Athens, GA, USA, 30602-7229</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>nkannan@uga.edu</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section: Contact v.2--> */}

        </div>

    </Layout>)
}