import TrierPar from "../components/TrierPar"

const HomePage = () => {
    return (
        <main>
            <div className="top">
                <h1>Boxe League</h1>
                <p>
                    La solution pour se renseigner sur vos combattants préférer tout en
                    prenant part à la création de boxeurs et de les faire combattre entre eux 
                </p>
            </div>
            <div className="bandeau">
                <h2>Champions</h2>
            </div>
            <TrierPar/>
        </main>
    )
}

export default HomePage
