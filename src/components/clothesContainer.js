import React, { Component } from 'react'
import Card from './cards'
import axios from 'axios'
import '../assets/cardContainer.css'


export class ClothContainer extends Component {
    
     constructor(props){
        super(props)
        this.state={
            clothes:new Array,
            clothesToRender: new Array
        }
     }


    componentDidMount(){
        axios.get("https://clothing-api-emo.herokuapp.com/all/products")
            .then(res =>{
                this.setState({
                    clothes : res.data,
                    
                })
                
            })
    }

    clothescards(){
        this.state.clothesToRender = this.state.clothes
        // console.log(this.state.clothesToRender)
        return this.state.clothesToRender.map(clothes=>{
            return <Card Shop={clothes.store_name} Name={clothes.name_product} Color={clothes.color} Price={clothes.price} Talla={clothes.talla} Foto={clothes.url} key={clothes._id}/>
        })
        
    
    }

     filterGender = () =>{
        let genderArr = new Array;
       genderArr= this.state.clothes.filter(item =>{
           return item.gender !== undefined && item.gender === 'm'
        })
        
        this.setState({
            clothesToRender: genderArr
        })
        
        debugger
    }


    
    
    render() {
        return (
            <div>
                <div className= 'dropit'>
                    <div className='perro'>
                        <div className="dropdown">
                            <button className="gender btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Hombre/Mujer</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" onClick={this.filterGender}>Mujer</button>
                                <button className="dropdown-item" type="button" onClick={this.filterGender}>Hombre</button>
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
                <div className='clothes-container'>
                
                    {this.clothescards()}

                    
                </div>
            </div>
        )
    }
}

export default ClothContainer
