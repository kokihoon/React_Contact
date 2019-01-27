import React from 'react';
 
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }
    render(){
        
        return (

            <div>
                <button onClick={() => { this.setState({
                name : 'qqweqwe'
            });}}>ClickMe</button>
                <h1>Hello!!asdasd!!asd!{this.state.name}</h1>
            </div>
        );
    }
}
 
export default App;