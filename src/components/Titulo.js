import './titulo.css';

const Titulo = ({change}) =>{
    return (
        <div className="flex justify-center pb-10">
            {!change ?
            <div className="titulo">
                <h1>Sons dos Animais</h1>
            </div>
        :
            <div className="titulo">
                <h1>Sons da Cidade</h1>
            </div>
        }
        </div>
        
    )
}

export default Titulo;