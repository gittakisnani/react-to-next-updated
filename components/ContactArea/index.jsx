import Form from '../Form'
const ContactArea = ({ className }) => {
    return (
        <div className={className}>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="contactInfo">
                            <h2>Richiedi una consulenza </h2>
                            <h6>Contattaci   al 06.3200355 oppure compila il Modulo </h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactArea