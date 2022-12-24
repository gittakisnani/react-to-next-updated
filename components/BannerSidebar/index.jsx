import Link from 'next/link'

const BannerSidebar = ({ className, image }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={className}>
            <h3><span></span> Anni di esperienza al tuo servizio</h3>
            <div className="btnStyle">
                <Link href="/contact">Contattaci</Link>
            </div>
        </div>
    )
}
export default BannerSidebar