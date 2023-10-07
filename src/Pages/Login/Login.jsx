
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null)

  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleSingIn = () => {
    
    signInWithPopup(auth,googleProvider)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser)
    })
     .catch(error => {
        const errorMessage = error.message;
        console.log('error', errorMessage)
     })
  }



  const handleGithubLogIN = () => {

    signInWithPopup(auth,githubProvider)
    .then(result => {
      const githubUser = result.user;
      setUser(githubUser)
    })
    .catch(error =>{
      const errorMessage = error.message;
      console.log(errorMessage)
    })
    
  }


  const handleSingOut = () => {
     
    signOut(auth)
    .then(result => {
        setUser(null)
    })
  .catch(error => {
    console.log(error)
  })
  }




    return (
        <div>

         { user?  <button  onClick={handleSingOut}>LogOut</button> :
                
                <>            
                    <button className="btn bg-slate-300 p-1" onClick={handleSingIn}>Google LogIn</button>
                    <br />
                    <button className=" mt-10 bg-slate-300 p-1" onClick={handleGithubLogIN} >Github LogIn</button>
                </>
            }


        {  user &&  <div>
                <h3>User :{user.displayName} </h3>
                <h3>Email :{user.email} </h3>
                 <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;