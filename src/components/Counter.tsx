import { Component } from 'react'; 

class Counter extends Component { 

    state = {
        count: 0
    }; 

    increment = () => {
        this.setState({ count: this.state.count + 1 }); 
    }; 

    // Ici, l'erreur créée était du fait que render de Component et le render ici défini n'était pas de la même forme
    // Le render de component renvoie void mais celui ici renvoie du JSX
    // Donc j'ai précisé le return type du render pour enlevé l'erreur

    render() : React.ReactNode { 
        return ( <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
        </div> );
    }
} 



export default Counter;