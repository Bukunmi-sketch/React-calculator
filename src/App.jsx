import React, { Component } from 'react';
import './App.css'
import heading from './components/header';
import Mainscreen from './components/mainscreen';
import Button from './components/btn';

class App extends Component {

    state={
       question: '',
       answer:''
    }

    handleclick=(event)=>{
        const value=event.target.value;

        switch (value){

            case '=':
                if(this.state.question!==''){
                    var ans ='';
                    try{
                        ans= eval(this.state.question);
                    }
                    catch(err){
                        this.setState( {answer: 'Math error'});
                    }
                    if(ans=== undefined)
                       this.setState({answer: 'Math error'})
                    else
                        this.setState({answer:ans, question: this.state.question });
                    break; 
                }

            case 'clr':
                this.setState({question:'',  answer: '' });
                 break;

            case 'del':
                 var str=this.state.question;
                 str=str.substr(0,str.length-1);
                 this.setState({ question: str });
                 break;

            default :
                 this.setState({ question : this.state.question += value })
                 break;
            
        }  //switch

    } //handleclick
    
    render() { 
        return (
            <div className="frame">
                <heading value="bukunmi calculator" />
                <div className="mainframe">
                    <Mainscreen question={this.state.question} answer={this.state.answer}/>
                    <div className="keypads">
                        <div className="button-row">
                           <Button clickit={this.handleclick} label={'clr'}/> 
                           <Button clickit={this.handleclick} label={'del'}/>   
                        </div>               
                        <div className="button-row">
                           <Button clickit={this.handleclick} label={'7'}/> 
                           <Button clickit={this.handleclick} label={'8'}/> 
                           <Button clickit={this.handleclick} label={'9'}/> 
                           <Button clickit={this.handleclick} label={'*'}/> 
                        </div>               
                        <div className="button-row">
                           <Button clickit={this.handleclick} label={'4'}/> 
                           <Button clickit={this.handleclick} label={'5'}/> 
                           <Button clickit={this.handleclick} label={'6'}/> 
                           <Button clickit={this.handleclick} label={'-'}/> 
                        </div>               
                        <div className="button-row">
                           <Button clickit={this.handleclick} label={'1'}/> 
                           <Button clickit={this.handleclick} label={'2'}/> 
                           <Button clickit={this.handleclick} label={'3'}/> 
                           <Button clickit={this.handleclick} label={'+'}/> 
                        </div>  
                        <div className="button-row">
                            <Button clickit={this.handleclick} label={'0'}/> 
                            <Button clickit={this.handleclick} label={'='}/> 
                            <Button clickit={this.handleclick} label={'.'}/> 
                            <Button clickit={this.handleclick} label={'/'}/>   
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}
 
export default App; 