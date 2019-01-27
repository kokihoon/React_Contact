import React from 'react';


export default class ContactCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }


    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);
        this.setState({
            name:'',
            phone:''
        });

        this.nameInput.focus();
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }


    handleKeypress(e) {
        if(e.charCode == 13) {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        ref={(ref) => {this.nameInput = ref }}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeypress}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}

// ContactCreate.propTypes = {
//     onCreate: React.propTypes.func
// };

ContactCreate.defaultProps = {
    onCreate: () => {console.error('onCreate not defined');}
}