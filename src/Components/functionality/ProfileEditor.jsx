import { useEffect, useState } from "react"
import { ProfileForm } from "../compounds/ProfileForm"
import { ProfilePreview } from "../compounds/ProfilePreview"
import { useRef } from "react"

export const ProfileEditor = () =>{

    const[name,setName] = useState("");
    const[bio,setBio] = useState("");
    const[image,setImage] = useState("");
    const nameRef= useRef(null);

    useEffect(()=>{
        nameRef.current?.focus();
    },[])

    return(
        <>
        
        <div className="grid grid-col-2 md:flex flex-row w-full max-w-5xl gap-10 items-start">
            <ProfileForm name={name} setName={setName} bio={bio} setBio={setBio} image={image} setImage={setImage} nameRef={nameRef}></ProfileForm>
            <ProfilePreview bio={bio} name={name} image={image}></ProfilePreview>
        </div>
        </>
    )
}