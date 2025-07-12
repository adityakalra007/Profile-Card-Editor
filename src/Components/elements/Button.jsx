
export const Button = ({label,onClick}) =>{
    return(
        <>
         <button 
         type="button"
         onClick={onClick} 
         className="px-4 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-900 transition cursor-pointer">
            {label}
         </button>
        </>
    )
}