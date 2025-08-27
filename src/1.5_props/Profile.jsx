import { getImageUrl } from "./utils"

export default function Profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70
}) {

    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={imageSize}
                height={imageId}
            />
            <ul>
                <li>
                    <b>Profession:  </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>
                    ({awards.join(', ')})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovery}
                </li>
            </ul>
        </section >
    )
}