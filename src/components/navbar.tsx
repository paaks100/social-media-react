import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    //get access to current auth user
    const [user] = useAuthState(auth);

    //Logout function
    const signUserOut = async () => await signOut(auth);

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>
                
                {/*Show Login link if not signed in and Create Post link if signed in*/}
                {!user ? <Link to="/login"> Login </Link> : <Link to="/createpost"> Create Post </Link>}
            </div>

            {/*If logged in, show user display name, photo, and Logout button*/}
            <div className="user">
                { user && (
                <>
                    <p> {user?.displayName} </p>

                    {/*If user has no photo, src will be an empty string since src can't be null*/}
                    <img src={user?.photoURL || ""} width="20" height="20"/>
                    <button onClick={signUserOut}> Logout </button>
                </>
                )
                }
            </div>
        </div>
    )
}