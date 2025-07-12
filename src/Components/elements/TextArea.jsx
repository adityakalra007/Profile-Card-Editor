
export const TextArea = ({value,onChange,placeholder}) =>{
    return(
        <>
        
        <textarea placeholder={placeholder} onChange={onChange} value={value}
        className="w-full mb-4 px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-black focus:outline-none transition "
        >
        </textarea>
        </>
    )
}