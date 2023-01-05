import Button from './Button.js';
import { IoFish} from "react-icons/io5";
import { FaHorse,FaDog, FaCat, FaTrain, FaPlane, FaCarAlt, FaBomb } from "react-icons/fa";
import { IconContext } from "react-icons";
const ButtonsCase = ({power, change, onClickButton1, onClickButton2, onClickButton3, onClickButton4}) =>{
    const dog = <IconContext.Provider  value={{size:"6.5em" }}><div><FaDog /></div></IconContext.Provider>;
    const horse = <IconContext.Provider value={{size:"6.5em" }}><div><FaHorse /></div></IconContext.Provider>;
    const cat = <IconContext.Provider value={{size:"6.5em" }}><div><FaCat /></div></IconContext.Provider>;
    const fish = <IconContext.Provider value={{size:"6.5em" }}><div><IoFish /></div></IconContext.Provider>;
    const train = <IconContext.Provider value={{size:"6.5em" }}><div><FaTrain /></div></IconContext.Provider>;
    const plane = <IconContext.Provider value={{size:"6.5em" }}><div><FaPlane /></div></IconContext.Provider>;
    const car = <IconContext.Provider value={{size:"6.5em" }}><div><FaCarAlt /></div></IconContext.Provider>;
    const bomb = <IconContext.Provider value={{size:"6.5em" }}><div><FaBomb /></div></IconContext.Provider>;

    return (
        <div className="flex-auto">
        {power ?
        <div>
            {!change ?
                <div className="grid gap-y-10 grid-cols-2 mx-10">
                <Button  value ={dog} onClick={onClickButton1} power={power}/>
                <Button  value={horse} onClick={onClickButton2} power={power}/>
                <Button  value={cat} onClick={onClickButton3} power={power}/>
                <Button  value={fish} onClick={onClickButton4} power={power}/>
                </div>
            :
                <div className="grid gap-y-10 grid-cols-2 mx-10">
                <Button value ={train} onClick={onClickButton1} power={power}/>
                <Button value={plane} onClick={onClickButton2} power={power}/>
                <Button value={car} onClick={onClickButton3} power={power}/>
                <Button value={bomb} onClick={onClickButton4} power={power}/>
                </div>
                
            }
        </div>
        :
        <div className="flex-auto">
            {!change ?
                <div className="grid gap-y-10 grid-cols-2 mx-10">
                <Button value ={dog} power={power}/>
                <Button value={horse} power={power}/>
                <Button value={cat} power={power}/>
                <Button value={fish} power={power}/>
                </div>
            :
                <div className="grid gap-y-10 grid-cols-2 mx-10">
                <Button value ={train} power={power}/>
                <Button value={plane} power={power}/>
                <Button value={car} power={power}/>
                <Button value={bomb} power={power}/>
                </div>
            }
        </div>
        }
    </div>
    )
}

export default ButtonsCase;