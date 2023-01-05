import Switch from './Switch.js';


const ControlCase = ({onChangeModal, onChangePower, power, display}) =>{
    
    return (
    <div className=" flex flex-auto w-64  flex-col justify-center ">
        <div className=" flex flex-col pb-5 ">
            <h1 className="flex justify-center text-4xl font-bold">POWER</h1>
            <div className="switchCase flex justify-center"><Switch onChange={onChangePower}/></div>
        </div>
        {power ?
            <div className="flex justify-center pb-8">
                <h1 className="box-border h-30 w-60 p-4 border-4 border-black flex justify-center items-center rounded-lg bg-violet-300 text-4xl font-semibold">{display}</h1>
            </div>
            :
            <div className="flex justify-center">
                <h1></h1>
            </div>
        }
        <div className="flex flex-col">
            <h2 className="flex justify-center text-4xl font-bold">CHANGE</h2>
            <div className="switchCase flex justify-center" onChange={onChangeModal}><Switch/></div>
        </div>
    </div>
    )
}

export default ControlCase;