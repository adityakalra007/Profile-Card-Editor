
export const Input = ({type,onChange,value,placeholder,innerRef}) =>{
    return(
        <>
        <input type={type} onChange={onChange} placeholder={placeholder} ref={innerRef} 
        className="w-full px-4 py-2 mb-4 rounded-lg bg-white/20 border border-white/30 placeholder-black focus:outline-none"></input>
        </>
    )
}