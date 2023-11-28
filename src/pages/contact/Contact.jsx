import React from "react";
import Nav from "../../components/Nav";
import Form from "./Form";
import Footer from '../../components/Footer'

function Contact() {

    return (
        <>
            <Nav />
            <main className="contain">
                <h1>
                    contact
                </h1>

                <div className="container text-center" style={{ width: '30%' }}>
                    <div className="row">
                        <div className=" g-col-lg-4  mt-5 p-5 shadow border-0 rounded-4" data-aos="fade-left">
                            <i className="fa-solid fa-mobile-screen-button p-5"
                                style={{ fontSize: '5rem', color: 'var(--first-color)' }}></i>
                            <h3 className="phoneNumber ">+33 6 27 26 22 76</h3>
                        </div>
                        <div className=" g-col-lg-4  mt-5 p-5 shadow border-0 rounded-4" data-aos="fade-right">
                            <i className="fa-regular fa-envelope p-5" style={{ fontSize: '5rem', color: 'var(--title-color)' }}></i>
                            <h3 className="mail ">herold.pommier@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default Contact;