import React, { Component } from 'react'
import TeamPokemon from '../components/TeamPokemon'

class TeamContainer extends Component {
    
    state = {
        timeLeft: 2,
    }

    


    // componentDidMount(){
    //     if(this.props.team.length > 0){
    //         this.timerId = setInterval( this.privacy, 1000)
    //     }else{
    //         console.log("You are good there are no pokemon here, stay as long as you want")
    //     }
        
    // }

    privacy = () => {
        console.log("timer", this.timerId)
        if(this.state.timeLeft > 0){
            this.setState(prevState => {
                return {timeLeft: prevState.timeLeft - 1}
            })
        }else{
            alert('HEY YOU VIOLATED THERE PRIVACY!! THEY ALL RAN AWAY!')
            // Make team equal to an empty array. 
            this.props.runAway()
            clearInterval(this.timerId)
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    

    mappedTeam = () => (this.props.team.map((pokemon )=> (
        <TeamPokemon pokemon={pokemon} /> )
    ))
    noTeamHtml = () =>(
        <>
            <h1>You have no Pokemon on your team. </h1>
            <img alt="surprised pikachu" src="https://media.tenor.com/images/7c355668e41f8cf511fe30c8483379d0/tenor.gif" />
        </>)
    
    
    render(){
        return (
            <div id="team-container">
                <h2>Your Pokemon are SHY!!!</h2>
                <h3>YOU HAVE {this.state.timeLeft} SECONDS LEFT BEFORE YOUR POKEMON RUN!</h3>
                { (this.mappedTeam().length === 0) ? this.noTeamHtml() : this.mappedTeam() }
            </div>
        )
    }
}

export default TeamContainer
