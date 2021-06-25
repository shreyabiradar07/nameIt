import React from 'react'
import './App.css';
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../SearchBox/SearchBox'
import Header from './../Header/Header'

const name = require('@rstacruz/startup-name-generator');
 //funtional component
// function App(){
//  return <h1>This is my functional component</h1>
// }

// class components

class App extends React.Component{

 state= {
  headerText: 'Name It!',
  headerExpanded: true,
  suggestedNames: [],
 };

handleInputChange = (inputText)=>{

  this.setState({headerExpanded: !inputText,
    suggestedNames: inputText ? name(inputText) : [] ,
  });
};


 render(){
  return(
  <div>
    <Header
    headerExpanded = {this.state.headerExpanded}
    headTitle = {this.state.headerText} />
    <SearchBox  onInputChange={this.handleInputChange}/>
    <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
  </div>
  )
 }
}

export default App