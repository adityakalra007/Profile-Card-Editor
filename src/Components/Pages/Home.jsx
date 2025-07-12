import { ProfileEditor } from "../functionality/ProfileEditor"


export const Home = () =>{
    return(
        <>
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-6">
            <ProfileEditor></ProfileEditor>
        </div>
        </>
    )
}