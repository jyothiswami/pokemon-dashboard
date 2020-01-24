import React, {Component}  from 'react';
import './dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
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
            loading : false
        }
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    loading : true,
                    items : json.results
                })
            });
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
                                <Button size="medium">Show details</Button>
                            </CardActions>
                        </Card>
                    ))}
                </ul>
           </div>
       );
    } 
      } 
}