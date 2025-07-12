import { Avatar } from "../elements/Avatar"

export const ProfilePreview = ({name,bio,image}) =>{
    return(
        <>
        <div className="bg-black backdrop-blur-md px-12 py-20 rounded-2xl max-w-80 w-80 shadow-lg border border-white/20 flex flex-col items-center text-center text-white">
        <Avatar src={image}></Avatar>
        <h1 className="text-2xl font-semibold">{name|| "Your Name"}</h1>
        <p className="text-white/70 mt-2">{bio || "Your Bio goes here..."}</p>
        </div>
        </>
    )
}