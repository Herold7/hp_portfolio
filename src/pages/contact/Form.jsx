import React from "react";

function Form() {
    
    return (
        <>
<section className="container">
    <form action="" method="POST" encType="multipart/form-data" 
        className="needs-validation mx-5 p-5 shadow border-0 rounded-4 needs-validation justify-content-md-center"
        style={{marginTop:'7rem',marginBottom:'5rem'}} no validate>
        <div className=" ">
            <h3 className="contain mb-5 display-3 text-center fw-bold text-primary">Rencontrons-nous</h3>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control form-control-lg" id="exampleInputName" aria-describedby="nameHelp"
                required />
            <div className="valid-feedback"> Ok !</div>
            <div className="invalid-feedback"> Valeur incorrecte</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Telephone</label>
            <input type="text" className="form-control form-control-lg" id="exampleInputName1" aria-describedby="nameHelp"
                required />
            <div className="valid-feedback"> Ok !</div>
            <div className="invalid-feedback"> Valeur incorrecte</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1"
                aria-describedby="emailHelp" required />
            <div className="valid-feedback"> Ok !</div>
            <div className="invalid-feedback"> Valeur incorrecte</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
            <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" rows="10"
                cols="10" required></textarea>
            <div className="valid-feedback"> Ok !</div>
            <div className="invalid-feedback"> Valeur incorrecte</div>
        </div>
        <button type="button" className="btn btn-primary fs-2" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Envoyer</button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title " id="exampleModalLabel">Fenêtre de validation</h1>
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