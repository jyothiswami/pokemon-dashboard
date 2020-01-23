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
            loading : false
        }
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
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
                        <li key={item.name} className="box">
                            <div>Name: {item.name} </div>
                            <div><button>Show details</button></div>
                            <Card>
                                <CardPrimaryContent>
                                    <h1>Header</h1>
                                    <CardMedia square imageUrl='./my/fancy/image.png' />
                                </CardPrimaryContent>
                            
                                <CardActions>
                                    <CardActionButtons>
                                        <button>Click Me</button>
                                    </CardActionButtons>
                                </CardActions>
                            </Card>
                        </li>
                    ))}
                </ul>
           </div>
       );
    }
        
      } 
}*/