import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/BreadCumb'
import FooterArea from '../../../components/FooterArea'
import ContactArea from '../../../components/ContactArea'
import { CollaboratoriConfig } from '../../../services-config/collaboratori';

// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import teamfoto from '../../../images/Attorneys-single/1.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import { useRouter } from 'next/router'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Avvocati e Collaboratori', route: '/attorneys' },
    { name: 'Persone in dettaglio' }
]
const teamMembarInfo = [
    { level: 'Ruolo: ', text: 'Siniour Lawyer' },
    { level: 'Aree di competenza: ', text: 'Family Lawyer, Criminal Defence, Personal Injury' },
    { level: 'Esperienza: ', text: '10 Years' },
    { level: 'Indirizzo: ', text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
    { level: 'Cellulare: ', text: '0800.123.456' },
    { level: 'Ufficio: ', text: '0800.123.456' },
    { level: 'Email: ', text: '' },
    { level: 'Fax: ', text: ' 6985231456' },
]

const biotest =
    `Data di nascita: 26 dicembre 1964.
Maturità classica anno 1983 (Istituto S. Giuseppe De Merode, Roma).
Laurea in giurisprudenza anno 1989 (Università degli studi di Roma La Sapienza).
Ufficiale della Guardia di Finanza in congedo col grado di Tenente.
Iscrizione albo procuratori legali (a seguito del superamento del relativo esame di abilitazione presso la Corte d’Appello di Roma) il 5.11.1992.
Iscrizione albo avvocati (a seguito del superamento del relativo esame di abilitazione nazionale) il 28.3.1996. 
Iscrizione albo speciale per il patrocinio davanti alla Corte di Cassazione ed alle giurisdizioni superiori (a seguito del superamento del relativo esame di abilitazione nazionale) il 25.3.1999.
Avvocato in diritto civile e diritto amministrativo, abilitato al patrocinio dinanzi alle Magistrature superiori.
Dal 1.1.2011 socio fondatore dell’Associazione professionale “Studio Legale Manzi e Associati”.
Lo Studio Legale Manzi e Associati è inserito fra i migliori studi legali d’Italia degli anni 2019, 2020 e 2021 dal Sole24Ore. 
Pubblicazioni: monografie, commenti, note, in Rivista Amministrativa della Repubblica Italiana - Regione Veneto, Rivista Amministrativa della Repubblica Italiana - Appalti, Impresa Commerciale-Industriale, Amministrazione e Giustizia, Rassegna Giuridica dell’Energia Elettrica, Il Nuovo Diritto Amministrativo, Commentario breve Cedam al Codice Civile – Leggi Complementari (Commento alla Legge Quadro sugli Appalti Pubblici – c.d. Merloni ter), “Legge quadro sui lavori pubblici” – Giuffrè Editore, Trattato sul codice dei contratti pubblici – Giuffrè Editore, Codice dei contratti pubblici – Giuffrè Editore, Rivista telematica Giustizia-amministrativa.it, Urbanistica e Appalti, Italia Oggi, Giurisprudenza italiana, Editoriale Scientifica e altri commenti in pubblicazioni Dike e Neldiritto Editore.
Attività didattica e convegni: corsi di diritto penale e regolamenti militari presso la Scuola Allievi Sottufficiali della Guardia di Finanza (anni 1990-91), corsi annuali in materia di appalti per dipendenti ENEL (anni 1992-98), seminari per società private, seminari presso il Centro Studi del Consiglio dell’Ordine degli Avvocati di Roma, docenze ai dipendenti del Ministero dei Trasporti e delle Infrastrutture per incarico della Luiss Management S.p.A. in materia di appalti pubblici ed attività contrattuale della p.a. (anno 2001), ai dipendenti della P.A. in master presso l’Università di Macerata, relazioni a seminari e convegni presso Enti pubblici e privati, Docente della Scuola Forense presso l’Università di Roma Tor Vergata dall’anno 2003 in diritto commerciale, relatore al Convegno celebrativo del centenario della istituzione della V Sezione del Consiglio di Stato (Palazzo Spada, 14.12.2007), Commissario per l’esame di Procuratore dello Stato presso l’Avvocatura  Generale dello Stato nei concorsi per gli anni 2007 e 2022, membro del Consiglio Direttivo della Scuola di Specializzazione per le Professioni legali presso la Libera Università Internazionale Degli Studi Sociali LUISS Guido Carli di Roma e docente di diritto processuale amministrativo nei relativi corsi. Docente nominato dal Consiglio dell’Ordine degli Avvocati di Roma per il Corso per cassazionisti – modulo specialistico diritto amministrativo.
Aree di attività professionale più ricorrenti: in generale tutto il diritto civile (in particolare arbitrati, il diritto commerciale, il diritto fallimentare, i contratti, gli appalti, la responsabilità contrattuale ed extracontrattuale, il diritto del lavoro, il diritto tributario) e tutto il diritto amministrativo (in particolare le procedure per l’affidamento degli appalti e le procedure concorsuali e ad evidenza pubblica, urbanistica ed edilizia, ambiente, pubblico impiego, diritto sportivo, ordinamento giudiziario, acque pubbliche, disciplinare, responsabilità degli amministratori e contabile, disciplina della concorrenza e pubblicità, energia, affidamento e gestione del servizio di distribuzione del gas, commercio, diritto costituzionale e regionale, diritto eurounitario).
Inserito negli elenchi di esperti e selezionato ai sensi dell’art. 84 del d.lgs. 163/2006 per l’espletamento di incarico di commissario in procedure per l’affidamento di contratti pubblici di lavori, servizi o forniture.
Esaminatore in Roma per conto dell’ente certificatore EN.I.C. per la figura specialista ufficio gare.
`

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    const id = useRouter().query?.id;
    const [collab, setCollab] = useState({})
    const AllCollab = CollaboratoriConfig()

    const [bioformatted, setbioformatted] = useState([])




    useEffect(() => {
        const found = AllCollab?.find(obj => {
            const lines = obj.bio.split('\n')
            setbioformatted(lines);
            console.log('obj', obj)
            return obj.id == id;
        });

        setCollab(found);


        console.log('colllab  found :', collab);


    }, [id]);


    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Persone"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />



            {collab && <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={collab?.image} alt="" />
                                        </div>
                                        {collab?.avvocato ? (
                                            <h4>{'Avv. ' + collab?.name}</h4>

                                        ) : (
                                            <h4>{collab?.name}</h4>

                                        )}

                                    </div>
                                </div>


                                <div className="col-md-6 col-12">
                                    <div className="singleTeamContent">
                                        <h4>Contatti</h4>
                                        <ul className="teamMembarInfo">

                                            <li>
                                                <span>Ruolo</span>
                                                {collab?.ruolo}
                                            </li>
                                            <li>
                                                <span>Indirizzo</span>
                                                {collab?.indirizzo}
                                            </li>

                                            <li>
                                                <span>Email</span>
                                                {collab?.email}
                                            </li>
                                            <li>
                                                <span>Pec</span>
                                                {collab?.pec}
                                            </li>

                                        </ul>
                                        {/*  <ul className="socialShare">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
    </ul>*/}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        {collab?.fondatore ? (
                                            <h3>Esperienza Personale </h3>

                                        ) : (
                                            <h3>Informazioni </h3>

                                        )}

                                        {bioformatted.map((line, index) => (
                                            // React.Fragment doesn’t create a wrapper element in the DOM.
                                            // If you don’t care about that, you can use div instead
                                            <p key={index} className="textbio">{line}</p>
                                        ))}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}


            {/* <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            /> */}
            <ContactArea
                className="contactArea"
            />

            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage