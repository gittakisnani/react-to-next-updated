import React, { useEffect } from 'react'
import SectionTitle from '../Title'
import Link from 'next/link';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";



// images
import portfolio1 from '../../images/studies/1.jpg'
import portfolio2 from '../../images/studies/2.jpg'
import portfolio3 from '../../images/studies/3.jpg'
import portfolio4 from '../../images/studies/4.jpg'
import portfolio5 from '../../images/studies/5.jpg'

const portfolioItem = [
    {
        images: portfolio1, title: 'Le giurisdizioni “sconfinate”', subtitle: 'Convegno di Venezia – III edizione Venerdì 13 novembre 2020', avvocati: 'Avv. Andrea Manzi', estratto: 'Il Convegno è libero e gratuito. Lo svolgimento sarà in modalità webinar con l’utilizzo della piattaforma Zoom....'
    },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
    { images: portfolio4, title: 'Accounting issue', subtitle: 'Criminal' },
    { images: portfolio5, title: 'Business Accounting', subtitle: 'Family Issue' }
]
const Portfolio = ({ title, subTitle, className, fullWidth, portfolioItem, articles = [], categories = [] }) => {

    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                </div>

            </div>

            {!fullWidth ? (

                <div className="portfolioWrapper">
                    {articles.slice(0, 5).map((portfolio, i) => (
                        <div key={i} className="portfolioItem">
                            <Link href={'/blog-fullwidth/' + portfolio.id + ''}>

                                <div className="CustomPortfolioContent" >
                                    <h3>{portfolio.attributes.Titolo}</h3>

                                    <p className="estratto" >{portfolio.attributes.Descrizione.substring(0, 200) + '...'}</p>



                                </div>
                                <div className="portfolioContent">
                                    <p>{portfolio.attributes.Descrizione.substring(0, 50) + '...'}</p>
                                    <h3>{portfolio.attributes.Titolo}</h3>
                                </div>
                            </Link>

                        </div>


                    ))}


                </div>
            ) : (
                <div className="container gridPortfolio">
                    <div className="row">
                        {/*portfolioItem.map((portfolio, i) => (
                            <div key={i} className="col-lg-4 col-sm-6 col-12">
                                <div key={i} className="portfolioItem">
                                    <img src={portfolio.images} alt="" />
                                    <div className="portfolioContent">
                                        <p>{portfolio.subtitle}</p>
                                        <h3>{portfolio.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))*/}
                        <Gallery photos={photos} />;

                    </div>
                </div>
            )}
        </div>
    )
}
export default Portfolio