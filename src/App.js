import React, {Component} from 'react';
import './App.css';
import Accordion from './Accordion';




class App extends Component {


state={
  data:[
   {
     title:'codito',
     texts:'hello everyone my name is codito and i like web development'
   },
   {
    title:'Nick',
    texts:'hello everyone my name is Nick and i am a designer'
  },
  {
    title:'Sara',
    texts:'hello everyone my name is Sara and i am a decorator'
  },
  {
    title:'rina',
    texts:'hello everyone my name is rina and i like paintinghello everyone my name is rina and i like paintinghello everyone my name is rina and i like paintinghello everyone my name is rina and i like painting'
  }

  ]
}


 render(){
  
  return (
    <div className="accordion">
     {this.state.data.map((acc, index)=>{
       return(
      
        <Accordion key={index} title={acc.title}  texts={acc.texts}  />
       
    
       )
     })}
    </div>
  );
 }
}

export default App;
