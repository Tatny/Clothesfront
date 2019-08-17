import React, { Component } from 'react'
import Card from './cards'
import axios from 'axios'
import '../assets/cardContainer.css'


export class ClothContainer extends Component {
    
     constructor(props){
         super(props)
         this.state={
             clothes:[],
             clothesToRender:[]
            }
        //  this.filterGender = this.filterGender.bind(this)
     }


    componentDidMount(){
        axios.get("https://clothing-api-emo.herokuapp.com/all/products")
            .then(res =>{
                this.setState({
                    clothesToRender : res.data,
                    clothes: res.data
                })
                
            })
    }

    clothescards(){
        // this.setState({
        //     clothesToRender : this.state.clothes,
            
        // })
        // this.state.clothesToRender = this.state.clothes
        console.log(this.state.clothesToRender)
        return this.state.clothesToRender.map(clothes=>{
            return <Card Shop={clothes.store_name} Name={clothes.name_product} Color={clothes.color} Price={clothes.price} Talla={clothes.talla} Foto={clothes.url} key={clothes._id}/>
        })
        
    
    }

    // clotheState(arr){
    //     this.setState({
    //         clothesToRender: arr
    //     })
    //     console.log('hola')
    // }

     filterMan = () =>{
       let genderArr= this.state.clothes;
        genderArr = genderArr.filter(item =>{
           return item.gender !== undefined && item.gender === 'm'
        })
        this.setState({
            clothesToRender: genderArr
        })
        
    }

    filterWmn = ()=>{
        let wmnArr= this.state.clothes;
        wmnArr = wmnArr.filter(item=>{
            return item.gender !== undefined && item.gender === 'f'
        })
        this.setState({
            clothesToRender: wmnArr
        })

    }
    
    filterCasual = ()=>{
        let casualArr= this.state.clothes;
        casualArr = casualArr.filter(item=>{
            return item.estilo !== undefined && item.estilo === 'Casual'
        })
        this.setState({
            clothesToRender: casualArr
        })

    }

    filterElegant = ()=>{
        let elegantArr= this.state.clothes;
        elegantArr = elegantArr.filter(item=>{
            return item.estilo !== undefined && item.estilo === 'Elegante'
        })
        this.setState({
            clothesToRender: elegantArr
        })

    }
 
    filterEurope = ()=>{
        let europeArr= this.state.clothes;
        europeArr = europeArr.filter(item=>{
            return item.estilo !== undefined && item.estilo === 'Europeo'
        })
        this.setState({
            clothesToRender: europeArr
        })

    }
    
    filtermas = ()=>{
        let masArr= this.state.clothes;
        masArr = masArr.filter(item=>{
            return item.price !== undefined && item.price <= '1500'
        })
        this.setState({
            clothesToRender: masArr
        })

    }

    filtermenos = ()=>{
        let menosArr= this.state.clothes;
        menosArr = menosArr.filter(item=>{
            return item.price !== undefined && item.price > '1500'
        })
        this.setState({
            clothesToRender: menosArr
        })

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
                                <button className="dropdown-item" type="button" onClick={this.filterWmn}>Mujer</button>
                                <button className="dropdown-item" type="button" onClick={this.filterMan}>Hombre</button>
                            </div>
                        </div>
                    </div>

                    <div className='perro'>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle style" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Estilos</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" onClick={this.filterCasual}>Casual</button>
                                <button className="dropdown-item" type="button" onClick={this.filterElegant}>Elegante</button>
                                <button className="dropdown-item" type="button" onClick={this.filterEurope}>Europeo</button>
                                <button className="dropdown-item" type="button"></button>
                            </div>
                        </div>
                    </div>

                    <div className='perro'>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle price" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Precios</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" onClick={this.filtermas}>-1500</button>
                                <button className="dropdown-item" type="button" onClick={this.filtermenos}>1500+</button>
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
