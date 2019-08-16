import React from 'react';
import '../assets/filtros.css';






export default class Example extends React.Component {



    render() {
        return (
            <div className= 'dropit'>

                <div className='perro'>
                    <div className="dropdown">
                        <button className="gender btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hombre/Mujer</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Mujer</button>
                            <button className="dropdown-item" type="button">Hombre</button>
                        </div>
                    </div>
                </div>

                <div className='perro'>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle style" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Estilos</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Casual</button>
                            <button className="dropdown-item" type="button">Elegante</button>
                            <button className="dropdown-item" type="button">Europeo</button>
                            <button className="dropdown-item" type="button"></button>
                        </div>
                    </div>
                </div>

                <div className='perro'>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle price" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Precios</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">-1500</button>
                            <button className="dropdown-item" type="button">1500+</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};


