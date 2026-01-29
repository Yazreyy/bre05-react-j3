import {useState} from 'react'

function User(props){
    const [isOn, setisOn] = useState(props.loggedIn);
    
    
    let message
    if(isOn === true){
      message = <p>En ligne</p>  
    } else {
        message = <p>Hors ligne</p>
    }
    
    function switchButton(){
        if(isOn === true){
            setisOn (false)
        } else {
            setisOn (true)
        }
    }
    
    return(
        <li>
    <article>
        <h2>{props.firstName} {props.lastName}</h2>
                       {message}
        <button onClick = {switchButton}>Connexion / Déconnexion</button>
    </article>
        </li>
        
        )
}

export default User