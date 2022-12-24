
const listItem = [
    'The master-builder of human happiness.',
    'Occasionally circumstances occur in which toil and pain',
    'Avoids pleasure itself, because it is pleasure',
    'who do not know how to pursue pleasure',
    'To take a trivial example, which of us ever undertakes',
]
const SingleContentArea = ({ className, avatar, image, title, content }) => {

    return (
        <div className={className}>

            <div className="singleContentWrap">
                <h3>{title}</h3>
                <p>{content}</p>
                {avatar && (
                    <div className="avatarWra">
                        <div className="row">
                            {/*  <div className="col-md-4">
                                <img src={avatarImg} alt="" />
                            </div>
                           <div className="col-md-8">
                                <h4>Family Law Organizations</h4>
                                <ul>
                                    {listItem.map(list => (
                                        <li key={list}>{list}</li>
                                    ))}

                                </ul>
                                    </div>*/}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SingleContentArea