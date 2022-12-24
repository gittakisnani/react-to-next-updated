import Link from 'next/link'
const Breadcumb = ({ className, title, breadcumbMenu, background = 'breadcumb/1.jpg' }) => {
    return (
        <div style={{ backgroundImage: `url(../../images/${background})` }} className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcumbWrap">
                            <h2>{title}</h2>
                            <ul>
                                {breadcumbMenu.map((menu,i) => (
                                    <li key={i}>{menu.route ? <Link href={menu.route}>{menu.name}</Link> : menu.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Breadcumb