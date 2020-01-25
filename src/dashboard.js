import React, {Component}  from 'react';
import './dashboard.css';
import img1 from '../src/assets/Desert.jpg';
   
const Dashboard = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt="image1"/>
            </div>
            <div className="card-body text-dark">
                <h4 className=" card-title">Card Title</h4>
                <p className="card-text text-secondary"> 
                    blablana blablanabla blanablab lanabla blanab lablanab labla nablablan a  blablanablablanablablanablablanablablana
                </p>
                <a href="#" className="btn btn-outline-success">GO anywere</a>
            </div>
        </div>
    )
}
export default Dashboard;

/* export default class Api extends Component{
        constructor(props){
        super(props);
        this.state ={
            items : [],
            pokemonDetails: {},
            loading : false
        }
    }

    fetchListOfPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    loading : true,
                    items : json.results
                })
            });
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
}*/