import React, { Fragment, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../Title'
import Link from "next/link";

import { CollaboratoriConfig } from '../../services-config/collaboratori';
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import('react-slick'))

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
                                            <div className="teamImage">
                                                <Link href={'/attorneys-single/' + team.id + ''}> 
                                                        <Image width={400} height={400} src={team.image} alt="" />
                                                </Link>
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