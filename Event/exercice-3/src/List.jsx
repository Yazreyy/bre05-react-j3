import {useState} from 'react'

function List() {
    const [Fruits, setFruits] = useState(["banane", "orange", "pomme", "citron", "mangue"])
    
    
    function supprimerDernier(){
        const Tableau = [...Fruits];
        Tableau.pop()
        setFruits(Tableau)
    }
    
    return(
        <article>
    <ul>
        {Fruits.map((fruit, i) => <li key={i}>{fruit}</li>)}
    </ul>
    <button onClick ={supprimerDernier}>Supprimer le dernier fruit</button>
</article>
        )
}

export default List