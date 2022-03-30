import Layout from '../components/Layout';
import React, { useState, useEffect } from "react"
// import {MailService} from '@sendgrid/mail'


export default function Contact() {
    const [emailApiKey, setEmailApiKey] = useState("");
    useEffect(() => {
        if (typeof window === 'undefined' && process.env)
            setEmailApiKey(process.env.GATSBY_EMAIL_API_KEY)
    })

    function sendEmail(e) {
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
                    <h4 className="display-5">Contact Us</h4>

                </div>
            </div>
            {/* <!--Section: Contact v.2--> */}
            <section className="mb-4" style={{ backgroundColor: '#fff' }}>

                {/* <!--Section heading--> */}
                {/* <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2> */}
                {/* <!--Section description--> */}
                {/* <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p> */}

                <div className="row" style={{ marginTop: "50px;" }}>

                    <hr />
                    <div className="mbr-footer-content col-xs-12 col-md-3">
                        <address>

                            <strong>Dr. Kannan's Lab</strong><br />
                            University of Georgia<br />
                            <a href="https://www.google.com/maps/place/Davison+Life+Sciences+Complex,+Athens,+GA+30602/@33.9432079,-83.3745252,17z/data=!3m1!4b1!4m5!3m4!1s0x88f66ce4945052f9:0x81b85f122ef239d8!8m2!3d33.9432079!4d-83.3723365">A318 Life Sciences Building</a><br />120 Green Street<br />
                            Athens, GA, USA, 30602-7229<br />
                            Email: nkannan@uga.edu<br />
                            Phone: +1 (706) 542-1714<br />
                        </address>

                        <address>
                            <strong>Dr. Kochut's Lab</strong><br />
                            University of Georgia<br />
                            <a href="https://www.google.com/maps/place/Boyd+Graduate+Studies+Research+Center,+200+D.+W.+Brooks+Drive,+Athens,+GA+30602/@33.9458486,-83.376851,17z/data=!3m1!4b1!4m5!3m4!1s0x88f66ce394abfb3d:0x8ab31baa95c4704d!8m2!3d33.9458486!4d-83.3746623">546 Boyd GSRC Building</a><br />
                            Athens, GA, USA, 30602-7404<br />
                            Email: kkochut@uga.edu<br />
                            Phone: +1 (706) 542-3441<br />
                        </address>
                    </div>
                    <div className="mbr-footer-content col-xs-12 col-md-3"><strong>Links</strong><ul><li className=""><a className="text-black" href="http://esbg.bmb.uga.edu/index.html">ESBG lab</a></li><li className=""><a className="text-black" href="http://cobweb.cs.uga.edu/~kochut/">Computer Science Lab</a></li><li className=""><a className="text-black" href="https://iob.uga.edu/">Institue of Bioinformatics</a></li></ul></div>
                    <div className="col-xs-12 col-md-6">
                        <div className="mbr-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13239.951022622601!2d-83.37700768151184!3d33.941443033426644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f6136038fba6bf%3A0x73d36bc77f0c8997!2sDivision%20of%20Biological%20Sciences!5e0!3m2!1sen!2sus!4v1580237169551!5m2!1sen!2sus" width="500" height="350" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe></div>
                    </div>
                </div>

                <div className="row" style={{ maxWidth: '1200px' }}>
                    <h2>Feedback</h2>
                    {/* <!--Grid column--> */}
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" method="POST">

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="name" className="">Name</label>
                                        <input type="text" id="name" name="name" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Email</label>
                                        <input type="text" id="email" name="email" className="form-control" />
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row-->

                <!--Grid row--> */}
                            <div className="row">
                                <div className="col-md-6">
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
                                <div className="col-md-8">

                                    <div className="md-form">
                                        <label for="message">Message</label>
                                        <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                        </form>

                        <div className="text-md-left" style={{ marginTop: '1rem' }}>
                            <a className="btn btn-primary" onClick={(e) => sendEmail()}>Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
            </section>
            {/* <!--Section: Contact v.2--> */}
        </div>

    </Layout>)
}