import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contatti', },
]

const ContactPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contatti"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />

            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                                <h3>I nostri contatti</h3>
                                <h4>Indirizzo</h4>
                                <span>Via Alberico II, n. 33 – 00193 Roma</span>
                                <h4>Indicazioni stradali </h4>
                                <button className="readmore" onClick={() => window.open("https://goo.gl/maps/1Cd3nCPJtfReAfdw5", '_blank')} >INDICAZIONI STRADALI </button>
                                <h4>Telefono</h4>
                                <span>06.3200355 (6 linee r.a.)</span>
                                <h4>Fax</h4>
                                <span>06.3211370</span>
                                <h4>Email</h4>
                                <span>info@studiolegalemanzi.it</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Modulo di contatto</h3>
                                <Form
                                    addressInfo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterArea />
        </Fragment>
    )
}
export default ContactPage