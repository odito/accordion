import React, { Component } from 'react';

export default class Accordion extends Component {


    state={
        showInfo:false,
    }


    handleToggle = ()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    

    render(props) {

      

        return (
            <div className="single_accordion">
               <div className={this.state.showInfo ?"tab active":'tab '} onClick={this.handleToggle}>
        <p>{this.props.title}</p><i className={this.state.showInfo ?"fas fa-minus":'fas fa-plus'}></i>
        
              </div>
             <div className={this.state.showInfo ? " showContent content":"content "}>
        <p>{this.props.texts}</p>
             </div>  
            </div>
        )
    }
}
