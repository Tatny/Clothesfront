import React, { Component } from 'react'
import '../assets/cards.css'
import "../components/clothesContainer"


export class cards extends Component {

    render() {
        return (
            <div>

                <div class="card" style={{width: '18rem'}}>
                    <img src={this.props.Foto} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{this.props.Shop}</h5>
                            <p class="card-text">{this.props.Name}</p>
                            <p class="card-text">{this.props.Color}</p>
                            <p class="card-text">${this.props.Price}</p>
                            <p class="card-text">{this.props.Talla}</p>
                            <p class="btn btn-primary">+</p>
                        </div>
                </div>
                </div>)
                }
             }
             
             export default cards
