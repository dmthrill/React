function Card({ children }) {
    return (
        <div className="card">
            <div className="card-content">
                {children}
                <p>123</p>
            </div>
        </div>

    )
}


export default function Profile() {
    return (
        <>
            <Card>
                <h1>Photo</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={100}
                    height={100}
                />
            </Card>
            <Card>
                <h1>Bio</h1>
                <p>Aklilu Lemma is a renowned mathematician.</p>
            </Card>
        </>
    );
}