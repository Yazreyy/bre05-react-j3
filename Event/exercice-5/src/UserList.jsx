
import User from './User'

function UserList(){
    let users = [
    {
        firstName: "Mari",
        lastName: "Doucet",
        loggedIn : true
    },
    {
        firstName: "Hugues",
        lastName: "Froger",
        loggedIn : false
    },
    {
        firstName: "Alain",
        lastName: "Terieur",
        loggedIn : true
    },
    {
        firstName: "Alex",
        lastName: "Terieur",
        loggedIn : false
    }
];
    
    return(
        <article>
    <h1>Liste des utilisateurs</h1>
    <ul>
        {users.map((user, i) => <User
        key = {i}
        firstName = {user.firstName}
        lastName = {user.lastName}
        loggedIn = {user.loggedIn}/>)}
    </ul>
</article>
        
        )
}

export default UserList