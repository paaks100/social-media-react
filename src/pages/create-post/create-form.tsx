//react-hook-form gives all functionality related to displaying errors, submitting form etc
//while yup is used for validation
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title: string,
    description: string
}

export const CreateForm = () => {
    //get access to current auth user
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    //shape how data should look like
    const schema = yup.object().shape({
        title: yup.string().required("A title is required"),
        description: yup.string().required("A description is required"),
    });

    //register tells react-hook-form which inputs should be used for validation in the form
    //yupResolver merges both react-hook-form & yup
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid    
        })

        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")}/>
            <p style={{color: "red"}}>{errors.title?.message}</p>

            <textarea placeholder="Description..." {...register("description")}/>
            <p style={{color: "red"}}>{errors.description?.message}</p>

            <input type="submit" className="submitForm"/>
        </form>
    )
}