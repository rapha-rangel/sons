import React from "react";
import Titulo from "./Titulo";
import ButtonsCase from './ButtonsCase.js';
import ControlCase from "./ControlCase.js";
import Cachorro from './ringer/Cachorro.wav';
import Gato from './ringer/Gato.wav';
import Aviao from './ringer/Aviao.wav';
import Bomba from './ringer/Bomba.wav';
import Carro from './ringer/Carro.mp3';
import Cavalo from './ringer/Cavalo.wav';
import Trem from './ringer/Trem.mp3';

class Box extends React.Component{
    constructor(props){
        super(props)
        this.state={
            power: false,
            display: 'O barulho é de...',
            change: false,
            play: " "
        }
        this.aviao = new Audio(Aviao);
        this.bomba = new Audio(Bomba);
        this.carro = new Audio(Carro);
        this.cavalo = new Audio(Cavalo);
        this.trem = new Audio(Trem);
        this.gato = new Audio(Gato);
        this.latido = new Audio(Cachorro);
        this.handleChange = this.handleChange.bind(this);
        this.handlePower = this.handlePower.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }
    
    handlePower() {
        {this.state.power ?
            this.setState({
                power:false,
                display:'O barulho é de...'
            })
        :
            this.setState({
            power:true
        })
        }
        console.log(this.state.power)
    }

    handleChange() {
        {this.state.change ?
            this.setState({
                change:false
            })
        :
            this.setState({
            change:true
            })
        }
        console.log(this.state.change)
    }
    
    handleClick1() {
        {!this.state.change ?
        this.setState({
            display: "DOG",
            play: this.latido.play()
        })
        :
        this.setState({
            display: "TRAIN",
            play: this.trem.play()
        })
        }
    }

    handleClick2() {
        {!this.state.change ?
        this.setState({
            display: "HORSE",
            play: this.cavalo.play()
        })
        :
        this.setState({
            display: "PLANE",
            play: this.aviao.play()
        })
    }
        
    }

    handleClick3() {
        {!this.state.change ?
            this.setState({
                display: "CAT",
                play: this.gato.play()
            })
            :
            this.setState({
                display: "CAR",
                play: this.carro.play()
            })
        }
    }

    handleClick4() {
        {!this.state.change ?
            this.setState({
                display: "FISH",
            })
            :
            this.setState({
                display: "BOMB",
                play: this.bomba.play()
            })
        }
    }

    render(){
        return (
            <div className="box-border h-128 w-128 m-5 px-20 pb-10 border-8 bg-green-300">
                <Titulo change={this.state.change}/>
                <div className="flex flex-row">
                <ButtonsCase onClickButton1={this.handleClick1} onClickButton2={this.handleClick2} onClickButton3={this.handleClick3} onClickButton4={this.handleClick4} change={this.state.change} power={this.state.power} />
                <ControlCase display={this.state.display} power={this.state.power}  onChangePower={this.handlePower} onChangeModal={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default Box;