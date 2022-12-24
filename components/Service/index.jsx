import React from 'react'
import Link from 'next/link'


const services = [
    { icon: 'fi flaticon-lawyer', subtitle: 'Contattaci', title: 'Appuntamento', link: '/contact' },
    { icon: 'fi flaticon-scale', subtitle: 'Scopri', title: 'Persone', link: '/attorneys' },
    { icon: 'fi flaticon-network', subtitle: 'Scopri', title: 'News e Articoli', link: '/blog-left' },]

const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                { /*  <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="serviceItem">
                                <div className="serviceIcon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>

                            </div>
                        </div>
                    ))}


                </div>*/}
                <div className="ourServiceArea ourServiceAreaStyleThree ">
                    <div className="row">

                        {services.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="serviceWrap">

                                    <div className="serviceContent">
                                        <h3>{service.title}</h3>
                                        <p>{service.content}</p>
                                        <div className="col-12">
                                            <button type="submit"><Link className="readmore linkW" href={service.link} >{service.subtitle}</Link></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Service