
import { Input } from "../elements/Input"
import { TextArea } from "../elements/TextArea"

export const ProfileForm = ({name,setName,bio,setBio,image,setImage,nameRef}) =>{
    const defaultImage ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    return(
        <>
          <div className="bg-white/10 backdrop-blur-md px-6 py-12 rounded-2xl shadow-lg border border-white/2 ">
          <h2 className="text-white text-3xl font-bold  mb-4 ">Edit Your Profile</h2>
          <Input type="text" placeholder="Enter Your Name..." value={name} onChange={(e)=>{setName(e.target.value)}} innerRef={nameRef}></Input>
          <TextArea value={bio} onChange={(e)=>{setBio(e.target.value)}} placeholder="Short Bio..."></TextArea>
          <Input value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Profile Image Url..."></Input>
          </div>
        </>
    )
}