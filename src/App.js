import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonsContainer from './containers/PokemonsContainer';
import TeamContainer from './containers/TeamContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// difference functional component* and class component
// Access to lifecycle methods only class components have access to them*
// functional components dont have state, unless we use hooks

class App extends Component {
  state = {
    pokemons: [],
    team: [],
    signedIn: true,
  }

  runAway = () => {
    this.setState({
      team: []
    })
  }

  changePage = (e) => {

    this.setState({
      page: e.target.id
    })
  }
  addPokemon = (id) => {
    // Find the pokemon that we want add
    const foundPokemon = this.state.pokemons.find((pokemon) => (pokemon.id === id))
    // set state and add the pokemon into the team
    if (!!this.state.team.find((pokemon) => (pokemon.id === id))){
      console.log("REMOVE THE POKEMON FROM TEAM")
    }else{
      // console.log("ADD POKEMON TO TEAM")

      this.setState((prevState, prevProps) => ({
        team: [...prevState.team, foundPokemon]
      }), () => console.log(this.state))

    }

  }

  // FETCH ON OUR COMPONENT DID MOUNT THAT CONTAINS OUR STATE
  componentDidMount(){
    fetch("http://localhost:3001/")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pokemons: json
        })
      })
  }
  
  render(){
    return (

    <div className="App">
        <Router>

          {/* If you want navbar to go away change state of signedin */}
          {this.state.signedIn ? <NavBar /> : false }
          <Switch>

         

            <Route path="/pokemons" component={() => {
            const pokemonContainerJSX = <PokemonsContainer team={this.state.team} addPokemon={this.addPokemon} pokemons={this.state.pokemons} /> 
            return (this.state.pokemons.length > 0 ? pokemonContainerJSX : <h1>Loading....</h1>)
          }} />



            <Route exact path="/teams" component={() => <TeamContainer runAway={this.runAway} team={this.state.team} />} />
            
            <Route path="/" render={() => <h1>ROUTE DOES NOT EXIST!</h1>} />


          </Switch>
        </Router>
    </div>
  )}
}

export default App;
