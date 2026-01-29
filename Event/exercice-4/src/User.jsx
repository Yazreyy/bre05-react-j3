import {useState} from 'react'

function User(){
    const [Data, setData] = useState({firstName :"Marlonn" , lastName : "Gillet" , isOn : false });
    
    
    let message
    if(Data.isOn === true) {
        message = <p> En ligne </p>
    } else {
        message = <p>Hors ligne</p>}
        
        function switchButton(){
            if(Data.isOn === true){
                setData({...Data, isOn : false})
            } else {
                setData({...Data, isOn : true})
            }
        }
    
    
    return(
        <article>
    <h2>{Data.firstName}{Data.lastName}</h2>
            {message}
    <button onClick ={switchButton}>Connexion / Déconnexion</button>
        </article>
        
        )
}

export default User