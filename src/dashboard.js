import React, {Component}  from 'react';
import './dashboard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            items : [],
            pokemonDetails: {},
            loading : false
        }
    }

    fetchDetailsOfPokemon(pokemon) {
        fetch(encodeURI(pokemon.url))
            .then(res=> res.json())
            .then(json => {
                console.log('details is ', json);
                this.setState({
                    loading : true,
                    pokemonDetails : json.results
                })
            });
    }

    fetchListOfPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res=> res.json())
            .then(json => {
                console.log('res is ', json);
                this.setState({
                    loading : true,
                    item : json.results
                })
            });
    }

    componentDidMount(){
        this.fetchListOfPokemon();
    }


    render() {
        var { loading, items} = this.state;
        if(!loading){
            return <div>Loading...</div>;
        }
        else{
            return(
                <div>
                    <h1>List Of Pokemon </h1>
                        <ul>
                            {items.map(item => (
                                <Card key={item.name} className='card'>
                                    <CardContent>
                                        <Typography className='something' color="textSecondary" gutterBottom>
                                        {item.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="medium" onClick={(e) => this.fetchDetailsOfPokemon(item)}>Show details</Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </ul>
                </div>
            );
        } 
      } 
}