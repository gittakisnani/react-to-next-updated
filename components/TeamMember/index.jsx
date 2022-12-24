import React, { Fragment, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../Title'
import Link from "next/link";

// images
import teamMember1 from '../../images/expert/andrea-manzi-avv-1.jpg'
import teamMember2 from '../../images/expert/2.jpg'
import teamMember3 from '../../images/expert/3.jpg'
import teamMember4 from '../../images/expert/4.jpg'
import teamMember5 from '../../images/expert/5.jpg'
import teamMember6 from '../../images/expert/6.jpg'
import { CollaboratoriConfig } from '../../services-config/collaboratori';
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

/*const teams = [
    {
        id: 1,
        bio: 'biografia descrizione ',
        name: 'Stefano Bertuzzi', level: 'Amministrativista - Appalti Pubblici', image: teamMember1, socialMedia: [
            ''
        ]
    },
    {
        id: 2,
        bio: 'biografia descrizione ',

        name: 'Céline Cusumano', level: 'Specializzato in professioni legali', image: teamMember2, socialMedia: [
            ''
        ]
    },
    {
        id: 3,
        bio: 'biografia descrizione ',

        name: 'Cristina Brugoni', level: 'Diritto amministrativo - Diritto del lavoro', image: teamMember3, socialMedia: [
            ''
        ]
    },
    {
        id: 4,
        bio: 'biografia descrizione ',

        name: 'Nicoletta Biagi', level: 'Diritto amministrativo - Diritto civile', image: teamMember4, socialMedia: [
            ''
        ]
    },
    {
        id: 5,
        bio: 'biografia descrizione ',

        name: 'Sujata Thapa', level: 'Contratti - Gestione dei contenziosi ', image: teamMember6, socialMedia: [
            ''
        ]
    },
]
*/

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const TeamMember = ({ className, title, subTitle, slider, noGutters }) => {

    const [teams, setTeams] = useState(CollaboratoriConfig())





    return (
        <div className={className}>
            <div className="container">
                <div className={!noGutters ? 'row' : 'row no-gutters'}>
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                    {slider ? (
                        <div className="col-12">
                            <Slider className="teamSlideArea" {...settings}>
                                {teams.map((team, i) => (

                                    <div key={i} className="teamWrapper">
                                        <Link href={'/attorneys-single/' + team.id + ''}>
                                            <div className="teamImage">
                                                <Image width={400} height={400} src={team.image} alt="" />
                                            </div>
                                            <div className="teamContent">
                                                <h3>{team.name}</h3>
                                                <span>{team.level}</span>
                                                <ul>
                                                    {team.socialMedia.map(social => (
                                                        <li key={social}><a href="#"><i className={`fa fa-${social}`} aria-hidden="true"></i></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Link>
                                    </div>

                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <Fragment>
                            {teams.map((team, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-12">
                                    <Link href={'/attorneys-single/' + team.id + ''}>
                                        <div className="teamWrapper">

                                            <div className="teamImage">
                                                <Image width={400} height={400} src={team.image} alt={team.name} />
                                            </div>
                                            <div className="teamContent">
                                                <h3>{team.name}</h3>
                                                <span>{team.level}</span>
                                                <ul>
                                                    {team.socialMedia.map(social => (
                                                        <li key={social}><a href="#"><i className={`fa fa-${social}`} aria-hidden="true"></i></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))}
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}
export default TeamMember