import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('import.meta.env.VITE_YOUR_SERVICE_ID', 'import.meta.env.VITE_YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'import.meta.env.VITE_YOUR_PUBLIC_KEY',
                reply_to: r.target.reset(),
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <>
            <section className="container">
                <form ref={form} onSubmit={sendEmail}
                    className="needs-validation mx-5 p-5 shadow border-0 rounded-4 needs-validation justify-content-md-center"
                    style={{ marginTop: '7rem', marginBottom: '5rem' }} no validate>
                    <div className=" ">
                        <h3 className="contain mb-5 display-3 text-center fw-bold text-primary">Rencontrons-nous</h3>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputName" className="form-label">Nom</label>
                        <input type="text" className="form-control form-control-lg" id="InputName" name="name" aria-describedby="nameHelp"
                            maxLength={50} required />
                        <div className="valid-feedback"> Ok !</div>
                        <div className="invalid-feedback"> Valeur incorrecte</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputTel1" className="form-label">Téléphone</label>
                        <input type="tel" className="form-control form-control-lg" id="InputTel1" name="phone" aria-describedby="nameHelp"
                            pattern="/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/" maxLength={50} required />
                        <div className="valid-feedback"> Ok !</div>
                        <div className="invalid-feedback"> Valeur incorrecte</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control form-control-lg" id="InputEmail1" name="email"
                            aria-describedby="emailHelp" pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/" maxLength={50} required />
                        <div className="valid-feedback"> Ok !</div>
                        <div className="invalid-feedback"> Valeur incorrecte</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="FormControlTextarea1" className="form-label">Textarea</label>
                        <textarea className="form-control form-control-lg" id="FormControlTextarea1" name="message" rows="10"
                            cols="10" pattern="/[\n\r\0]*(?=\w)(.*)/" maxLength={255} required></textarea>
                        <div className="valid-feedback"> Ok !</div>
                        <div className="invalid-feedback"> Valeur incorrecte</div>
                    </div>
                    <button type="button" className="btn btn-primary fs-2" data-bs-toggle="modal"
                        data-bs-target="#Modal">Envoyer</button>
                    <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ModalLabel">Fenêtre de validation</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h3>Cliquez sur valider pour envoyer</h3>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary fs-3" data-bs-dismiss="modal">Annuler</button>
                                    <button type="submit" className="btn btn-primary fs-3">Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form;