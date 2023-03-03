import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    
    const signInWithGoogle = async () => {
        //result will contain Google user's information
        const result = await signInWithPopup(auth, provider);

        //navigate to home page after signin
        navigate("/")
    }

    return (
        <div>
            <p>Sign in with Google to continue</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}