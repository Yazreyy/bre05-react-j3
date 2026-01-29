import {useState} from 'react'

function User() {
    const [Status, setStatus] = useState(false);
    
    function switchButton(){
        if(Status === true){
            setStatus(false)
        } else {  setStatus(true)
    }
        
    }
    
    
    let message
    if(Status === true){
        message = <p>En ligne</p>
    } else { message = <p>Hors ligne</p>}
    
    return(
      <article>
    <h2>Mari Doucet</h2>
         {message}
    <button onClick = {switchButton}>Connecter</button>
      </article>  
    )
}

export default User