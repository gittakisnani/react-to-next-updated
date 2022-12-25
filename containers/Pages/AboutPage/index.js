import React, { Fragment, useState } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/BreadCumb'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import TeamMember from '../../../components/TeamMember'
import FooterArea from '../../../components/FooterArea'
// images
import about1 from '../../../images/about/1.jpg'
import about2 from '../../../images/about/andrea-manzi.jpg'
import about3 from '../../../images/about/1-tmp.jpg'
import Portfolio from '../../../components/Portfolio'

// config file 
import { ServiziConfig } from '../../../services-config/servizi-studio';

const aboutText1 = [
    { text: 'L’origine dello Studio Legale Manzi è strettamente collegata alla formazione del suo fondatore, Luigi Manzi, laureatosi nel 1956 con il massimo dei voti presso l’Università degli Studi di Padova, forte degli insegnamenti di straordinari Maestri.' },
    { text: 'Tra tutti, i Professori Giorgio Oppo e Alberto Trabucchi, i quali sono poi diventati anche compagni di esperienze di vita e di professione forense. ' },
    { text: ' Formato a metà del secolo scorso da Luigi Manzi, lo Studio è poi proseguito – dal 2011 nella forma di Associazione professionale – anche con i figli Andrea e Federica e con i suoi collaboratori, anche ora che il fondatore è venuto a mancare.' },
    { text: 'Lo Studio opera prevalentemente nel campo del diritto civile, commerciale, amministrativo, costituzionale, della responsabilità contabile e altri settori, collaborando con centinaia di Studi legali dislocati nelle varie città d’Italia.' },
    { text: ' Assiste numerosi enti, Regioni, Comuni, organismi di diritto pubblico, imprese pubbliche e private, nonché soggetti privati. Lo Studio, inserito fra i migliori studi legali d’Italia degli anni 2019, 2020, 2021 e 2022 dal Sole24Ore, nonché (dal 2019) sede della “Fondazione Giorgio Oppo”, è quotidianamente impegnato dinanzi ai principali uffici giudiziari, in particolare dinanzi alle Magistrature superiori (Corte Costituzionale, Corte di Cassazione, Consiglio di Stato, Corte dei Conti, Tribunale Superiore delle Acque Pubbliche).' },
    { text: '  Svolge altresì attività di supporto e consulenza in materia stragiudiziale e in Collegi Arbitrali. I componenti dello Studio svolgono inoltre attività convegnistica, di docenza, partecipano a commissioni di gara e d’esame e sono autori di numerose pubblicazioni monografiche e commenti. ' },
    { text: '  Serietà, competenza e impegno tracciati dal fondatore, si adeguano ai mutamenti e alle trasformazioni della società, della realtà economica e dell’ordinamento, conservando immutate le caratteristiche sempre riconosciute nel Foro e dalle parti assistite.' },
]


const aboutText2 = [
    { text: 'Data di nascita: 26 dicembre 1964.Maturità classica anno 1983 (Istituto S. Giuseppe De Merode, Roma).' },
    { text: '  Laurea in giurisprudenza anno 1989 (Università degli studi di Roma La Sapienza).Ufficiale della Guardia di Finanza in congedo col grado di Tenente.Iscrizione albo procuratori legali (a seguito del superamento del relativo esame di abilitazione presso la Corte d’Appello di Roma) il 5.11.1992.Iscrizione albo avvocati (a seguito del superamento del relativo esame di abilitazione nazionale) il 28.3.1996.' },
    { text: '  Iscrizione albo speciale per il patrocinio davanti alla Corte di Cassazione ed alle giurisdizioni superiori (a seguito del superamento del relativo esame di abilitazione nazionale) il 25.3.1999...' },

]



const services = [

    {
        icon: 'flaticon-thief',
        title: 'Responsabilità contabile e responsabilità erariale',
        content: 'svolge attività giurisdizionale innanzi alla Corte die Conti, con particolare riferimento ai giudizi per danno erariale.'
    },
    {
        icon: 'flaticon-wounded',
        title: 'Urbanistica, edilizia e diritto immobiliare',
        content: 'lo Studio offre assistenza e consulenza, a soggetti pubblici e privati, in tutte le problematiche inerenti l’inquadramento normativo del settore '
    },
    {
        icon: 'flaticon-employee',
        title: 'Accesso agli atti e ai documenti amministrativi',
        content: 'Lo Studio offre assistenza e consulenza, anche in sede giudiziale, avuto riguardo alle procedure di accesso ad atti e/o documenti amministrativi, come disciplinate dalla Legge 7 agosto 1990, n. 241  '
    },

    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Diritto d\'impresa e societario',
        content: 'L’attività di assistenza e consulenza in campo commerciale è incentrata sulla predisposizione e negoziazione di contratti commerciali e, in particolare, di contratti relativi alla produzione e vendita di beni e/o servizi. '
    },
    {
        icon: 'flaticon-parents',
        title: 'Contrattualistica pubblica',
        content: 'Lo Studio offre consulenza ed assistenza, anche in sede giudiziale e presso le Superiori Giurisdizioni (Consiglio di Stato e Cassazione)'
    },
    {
        icon: 'flaticon-house',
        title: 'Diritto militare',
        content: 'specializzato in ricorsi amministrativi e giudiziali in favore del personale militare tra i quali: procedimenti disciplinari; trasferimenti di autorità; avanzamento di carriera; note caratteristiche ... '
    },
    {
        icon: 'flaticon-house',
        title: 'Autorizzazioni al commercio e concessioni demaniali',
        content: 'Lo Studio vanta una maturata competenza per tutte le attività prodromiche al rilascio delle concessioni demaniali ed offre consulenza ed assistenza in ipotesi di revoca della stessa '
    },
    {
        icon: 'flaticon-house',
        title: 'Pubblico impiego e concorsi pubblici ',
        content: 'ricorsi amministrativi e giudiziali relativi alle controversie aventi ad oggetto i rapporti di lavoro con le pubbliche amministrazioni (rapporti di pubblico impiego).  '
    },

    {
        icon: 'Procedure contributi pubblici AGEA',
        title: 'Procedure contributi pubblici AGEA',
        content: 'Lo Studio offre assistenza e consulenza agli operatori economici, ed alle associazioni rappresentative di categoria, nell’ambito del sistema unico di pagamento (PAC) e dei contributi erogati da AGEA. '
    },
]
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Lo studio' }
]

const AboutPage = ({ categories, articles }) => {
    const [services, setservices] = useState(ServiziConfig())

    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Lo studio"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <Service className="serviceArea mt-0" />
            <About
                className="aboutArea aboutAreaStyleTwo"
                title="Lo studio"
                subTitle=""
                images={about1}
                images3={about3}
                orderLast="order-last"
                videoId=""
                pragraphs={aboutText1}
            />
            <About
                className="aboutArea"
                title="Avvocato Andrea Manzi "

                images={about2}
                pragraphs={aboutText2}
                button_profile={true}
            />
            <ServiceArea
                className="ourServiceArea"
                title="Aree di competenza"
                subTitle="Area"
                services={services}
            />



            <TeamMember
                title="Persone"
                subTitle="Avvocati e associati"
                className="teamArea"
                slider={true}
            />

            <Portfolio
                title="Galleria"
                subTitle="Studio Legale Manzi"
                fullWidth={true}
                className="portfolioArea portfolioAreaStyleTwo"
                categories={categories}
                articles={articles}
            />

            { /* <BlogArea
                className="blogArea"
                title="Ultime News"
                subTitle="Rimani aggiornato"
    />*/}


            <FooterArea />
        </Fragment>
    )
}
export default AboutPage