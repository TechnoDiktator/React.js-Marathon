import React from "react";


export default class Comp1 extends React.Component{


    state = {
        sirname:'rastogi',
        count:0
    }


    inc = ()=>{
        this.setState( {count:this.state.count +1} )
    }

    render(){
        return (
            <>
                <h1>Class Components</h1>
                <h1>Comp1</h1>
                <h3>{this.props.name}</h3>
                <h3>{this.state.sirname}</h3>
                <h3>{this.state.count}</h3>
                <button onClick={this.inc} type="">Increment Count</button>
            </>
        )    
    }


}