import React from "react";
import Nav from "../../components/Nav";
import Form from "./Form";
import Form2 from "./Form2";
import Footer from '../../components/Footer';
import phone from '../../../public/assets/media/img/logo/phone.png';
import mail from '../../../public/assets/media/img/logo/mail.png';


function Contact() {

    return (
        <>
            <Nav />
            <main className="contain">
                <h1>
                    contact
                </h1>
                <div className="container text-center" id="contact" style={{ width: '35rem' }}>
                    <div className="row" id="contactrow">
                        <div className=" g-col-sm-4  mt-5 p-5 shadow border-0 rounded-4" data-aos="fade-left">
                            <img src={phone} style={{ width: '5rem', marginBottom: '3rem' }} />
                            <h3 className="phoneNumber ">+33 6 27 26 22 76</h3>
                        </div>
                        <div className=" g-col-sm-4  mt-5 p-5 shadow border-0 rounded-4" data-aos="fade-right">
                            <img src={mail} style={{ width: '5rem', marginBottom: '3rem' }} />
                            <h3 className="email"> herold.pommier@gmail.com </h3>
                        </div>
                    </div>
                </div>
                <Form2 />
            </main>
            <Footer />
        </>
    )
}

export default Contact;