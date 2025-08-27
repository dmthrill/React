function Item({ name, importance }) {
    if (importance > 0) {
        return (
            <li className="item">
                <b>{name}</b>  <i>(Importance: {importance})</i>
            </li >
        );
    } return (
        <li className="item">
            <b>{name}</b>
        </li>

    );
}

function ItemAnd({ name, importance }) {
    return (
        <li className="item">
            <b>{name}</b>{importance > 0 && <i> (Importance: {importance})</i>}
        </li >
    );

}



// Space suit(Importance: 9)
// Helmet with a golden leaf
// Photo of Tam(Importance: 6)

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <ItemAnd
                    importance={9}
                    name="Space suit"
                />
                <ItemAnd
                    importance={0}
                    name="Helmet with a golden leaf"
                />
                <ItemAnd
                    importance={6}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}

