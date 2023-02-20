import React, { Component, Fragment} from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Save from './Components/Save/Save';

class App extends Component {
 state = {
   cards: [],
   newPost: false,
   onUpdate: false,
   id:'',
   name:'',
   description:''
 }

 componentDidMount(){
   this.setState({cards: JSON.parse( localStorage.getItem('cards')) || [] });
 }


 newPostHandler = () => {
   this.setState({newPost: true, onUpdate: false, id:'', name:'', description:''})
 }

 homePageHandler = () => {
   this.setState({newPost: false, onUpdate: false, id:'', name:'', description:''})
 }

 onDeleteHandler = (card) => {
   const filterCard = this.state.cards.filter( c => c.id !== card.id)
   this.setState({cards: filterCard});
 localStorage.setItem('cards', JSON.stringify(filterCard));
 }

 onAddEdit = (card) => {
  this.setState({onUpdate: true, id: card.id, name: card.name, description: card.description});
 }

 onChangeHandler = (event) => {
   this.setState({ [event.target.name] : event.target.value})
 } 

 onSaveHandler = () => {
   const { id, name, description } = this.state;
   if( id === '' || name === '' || description === '' ) return alert('No Input Filed Must Empty');
  const Card = {id, name, description};
  const cardIndex = this.state.cards.findIndex( c => c.id === id);
  const Cards = [...this.state.cards ];

  if ( cardIndex === -1) Cards.push(Card);
  else Cards[cardIndex] = Card;

  this.setState({ cards: Cards});
 localStorage.setItem('cards', JSON.stringify(Cards) )
  this.homePageHandler();

 }

 goBack = () => {
  this.setState({newPost: false, onUpdate: false, id:'', name:'', description:''})
 }


  render() { 

    let cards = this.state.cards.map((card, index) => {
      return (
      <Card
      key={card.id}
      id={card.id}
      name={card.name}
      description={card.description}
      delet={this.onDeleteHandler.bind(this, card)}
      Edit = {this.onAddEdit.bind(this, card)}
      />);
    });

    let save = (
    <Save
    home={this.homePageHandler}
    id = {this.state.id}
    name = {this.state.name}
    description = {this.state.description}
    change = {this.onChangeHandler}
    isUpdate = {this.state.onUpdate}
    save={this.onSaveHandler}
    />);
 
    return (
      <Fragment>
         <Header newPost={this.newPostHandler} />
        <Grid container>
       <Grid item sm={2} ></Grid>
       <Grid item sm={8} >
        { (this.state.newPost || this.state.onUpdate) ? save : cards }  
       </Grid>
       <Grid item sm={2} ></Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default App;
