import React, { Fragment, useState } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import ContactArea from '../../../components/ContactArea'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/1.jpg'
import signature from '../../../images/about/1.jpg'

// images
import portfolio1 from '../../../images/studies/1.jpg'

// config file 
import { ServiziConfig } from '../../../services-config/servizi-studio';
import dynamic from 'next/dynamic'
import Portfolio from '../../../components/Portfolio'
// import BlogArea from '../../../components/BlogArea'


//Dynamic imports
const TeamMember = dynamic(() => import('../../../components/TeamMember'), { ssr: false})
const HeroSlider = dynamic(() => import('../../../components/HeroSlider')) 

const aboutText = [
    { text: 'L’origine dello Studio Legale Manzi è strettamente collegata alla formazione del suo fondatore, Luigi Manzi, laureatosi nel 1956 con il massimo dei voti presso l’Università degli Studi di Padova, forte degli insegnamenti di straordinari Maestri.' },
    { text: 'Tra tutti, i Professori Giorgio Oppo e Alberto Trabucchi, i quali sono poi diventati anche compagni di esperienze di vita e di professione forense. ' },
    { text: ' Formato a metà del secolo scorso da Luigi Manzi, lo Studio è poi proseguito – dal 2011 nella forma di Associazione professionale – anche con i figli Andrea e Federica e con i suoi collaboratori, anche ora che il fondatore è venuto a mancare.' }

]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'Studio Legale Manzi ',
        subTitle: '',
        text: '',
        button: 'Contattaci'
    },
    {
        images: 'slideWrapperTwo',
        title: 'Studio Legale Manzi ',
        subTitle: '',
        text: '',
        button: 'Contattaci'
    },
    {
        images: 'slideWrapperThree',
        title: 'Studio Legale Manzi ',
        subTitle: '',
        text: '',
        button: 'Contattaci'
    },
    {
        images: 'slideWrapperFour',
        title: 'Studio Legale Manzi ',
        subTitle: '',
        text: '',
        button: 'Contattaci'
    },
    {
        images: 'slideWrapperFive',
        title: 'Studio Legale Manzi ',
        subTitle: '',
        text: '',
        button: 'Contattaci'
    },


]



const portfolioItem = [
    {
        images: portfolio1, title: 'Appalti pubblici', subtitle: 'L’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito...'
    },
    {
        images: portfolio1, title: 'Appalti pubblici', subtitle: 'L’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito...'
    }, {
        images: portfolio1, title: 'Appalti pubblici', subtitle: 'L’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito...'
    }, {
        images: portfolio1, title: 'Appalti pubblici', subtitle: 'L’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito...'
    }, {
        images: portfolio1, title: 'Appalti pubblici', subtitle: 'L’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito...'
    },
]


const HomePageOne = ({ categories, articles }) => {

    const [services, setservices] = useState(ServiziConfig())


    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />

            </header>

            <HeroSlider
                sliders={heroSliders}
                className="heroSliderArea" 
            />
            <Service className="serviceArea" />
            <About
                className="aboutArea"
                title="Lo studio"
                images={about}
                signature={signature}
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea"
                title="Aree di competenza"
                subTitle="Area"
                services={services}
            />
            <Portfolio
                className="portfolioArea"
                title="News"
                subTitle="Sentenze e Pubblicazioni"
                portfolioItem={portfolioItem}
                categories={categories}
                articles={articles}
            />

            <ContactArea
                className="contactArea"
            />
            <TeamMember
                title="Persone"
                subTitle="Associati e collaboratori"
                className="teamArea"
                slider={true}
            />

            {/* <BlogArea
                            className="blogArea"
                            title="Ultime News"
                            subTitle="Rimani aggiornato"
                /> */}

            <FooterArea />
        </Fragment>
    )
}
export default HomePageOne