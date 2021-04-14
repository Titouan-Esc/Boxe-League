import React from 'react'

const Combats = () => {
    return (
        <main className='combat'>
            
            <div className="combat_top">
                <img src="./logo/logo.png" alt="Logo du site"/>

                <div className="top_text">
                    <h1>Boxe League</h1>
                    <p>
                        Quoi de mieux que de participer un tournoi avec
                        les personnages que vous venais de créer !
                    </p>
                </div>

                <div className="middel_combat">
                    <h2>Combats</h2>
                    <p>Sélectionner vos combattans</p>
                </div>

                <div className="les_combattants">
                    ici les combattans
                </div>
            </div>
        </main>
    )
}

export default Combats
