import TrierPar from "../components/TrierPar"
import NavBar from "../components/NavBar"

const HomePage = () => {
    return (
        <main>
            <NavBar/>
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
            <div className="champions">
                
            </div>
        </main>
    )
}

export default HomePage
