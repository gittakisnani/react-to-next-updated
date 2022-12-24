import Link from 'next/link';

const cetagoryMenu = [
    { name: 'Family Law', route: "case-stadies-details" },
    { name: 'Criminal Law', route: "case-stadies-details" },
    { name: 'Business Law', route: "case-stadies-details" },
    { name: 'Personal Injury', route: "case-stadies-details" },
    { name: 'Education Law', route: "case-stadies-details" },
    { name: 'Drugs Crime', route: "case-stadies-details" },
]


const CetagorySidebar = ({ className, title, categories = [] }) => {

    return (
        <div className={className}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                {categories.map((categoria, i) => (
                    <li key={i}><Link href=''>{categoria.attributes.Nome}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default CetagorySidebar