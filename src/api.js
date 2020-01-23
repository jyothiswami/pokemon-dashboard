import React, {Component}  from 'react';

export default class Api extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then(res=> res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.name}>
                  {item.name} {item.price}
                </li>
              ))}
            </ul>
          );
        }
      }
}