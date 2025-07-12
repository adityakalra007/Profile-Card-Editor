
export const Avatar = ({src}) =>{
    return(
        <>
        <img src={src || "https://via.placeholder.com/150"}
        className="w-32 h-32 rounded-full object-cover border-4 border-white/30 mb-4"
        ></img>
        </>
    )
}