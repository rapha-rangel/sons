
const Button = ({value, power, onClick}) =>{
    
    return(
        <>
        {power ? 
            <button className="box-border h-48 w-48 p-20 border-8 border-black flex justify-center items-center rounded-lg  bg-yellow-300 hover:bg-indigo-500 hover:outline outline-offset-2 outline-blue-500" onClick={onClick} value={value}>{value}</button>
        :
            <button className="box-border h-48 w-48 p-20 border-8 border-black flex justify-center items-center rounded-lg bg-slate-400 cursor-not-allowed"   value={value}>{value}</button>
        }
        </>
    )
}

export default Button;