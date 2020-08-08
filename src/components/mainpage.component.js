import React, { Component } from 'react';
import axios from 'axios'
import Feedcard from "./feedcard.component"

export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : "USA",
            items : [],
        };
    }

    handleClick(l){
        this.setState({
            location:l
        })

        axios.get('https://covid-news-react-app.cognitiveservices.azure.com//bing/v7.0/news/search?q=coronavirus%20'+l, {
            headers : {
                'Ocp-Apim-Subscription-Key': 'f89e26f0ad4e402a882efa2650fbdb61'
            }
        }).then(res => {
            const articles = res.data.value;
            this.setState({items:articles});
        }).catch(function (error) {
            console.log(error)
        })
    }

    componentDidMount() {
        axios.get('https://covid-news-react-app.cognitiveservices.azure.com//bing/v7.0/news/search?q=coronavirus%20USA', {
            headers : {
                'Ocp-Apim-Subscription-Key': 'f89e26f0ad4e402a882efa2650fbdb61'
            }
        }).then(res => {
            const articles = res.data.value;
            this.setState({items:articles});
        }).catch(function (error) {
            console.log(error)
        })
    }
    
    render() {
        console.log(toString(process.env.REACT_APP_KEY))
        const locations = {
            "backgroundColor":"#dcdcde",
            "paddingLeft":"0",
            "paddingRight":"0",
            "overflow-y":"scroll",
            "height":"100vh",
            "fontFamily":"Quantico"
        }
        const feed = {
            "backgroundColor" : "white",
            "overflow-y":"scroll",
            "height":"100vh",
        }
        
        const card_st = {
            "fontFamily":"Alberta",
            "fontSize":"2em",
            "padding":"0",
            "margin":"0",
            "text-align":"center"
        }
        
        const {items} = this.state;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2" style={locations}>
                        <button className="butt_r">Select State/County</button>
                        <button className="butt" autoFocus onClick={() => this.handleClick("USA")}>USA Overall</button>
                        <button className="butt" onClick={() => this.handleClick("San%20Francisco")}>San Francisco, CA</button>
                        <button className="butt" onClick={() => this.handleClick("San%20Jose")}>San Jose, CA</button>
                        <button className="butt" onClick={() => this.handleClick("Los%20Angeles")}>Los Angeles, CA</button>
                        <button className="butt" onClick={() => this.handleClick("Seattle")}>Seattle, WA</button>
                        <button className="butt" onClick={() => this.handleClick("Boston")}>Boston, MA</button>
                        <button className="butt" onClick={() => this.handleClick("Chicago")}>Chicago, IL</button>
                        <button className="butt" onClick={() => this.handleClick("New%20York%20City")}>NY City, NY</button>
                        <button className="butt" onClick={() => this.handleClick("Austin")}>Austin, TX</button>
                        <button className="butt" onClick={() => this.handleClick("Dallas")}>Dallas, TX</button>
                        <button className="butt" onClick={() => this.handleClick("California")}>California</button>
                        <button className="butt" onClick={() => this.handleClick("Washington")}>Washington</button>
                        <button className="butt" onClick={() => this.handleClick("New%20York")}>New York</button>
                        <button className="butt" onClick={() => this.handleClick("Texas")}>Texas</button>
                        <button className="butt" onClick={() => this.handleClick("Florida")}>Florida</button>
                        <button className="butt" onClick={() => this.handleClick("Pennsylvania")}>Pennsylvania</button>
                        <button className="butt" onClick={() => this.handleClick("Illinois")}>Illinois</button>
                        <button className="butt" onClick={() => this.handleClick("Ohio")}>Ohio</button>
                        <button className="butt" onClick={() => this.handleClick("Georgia")}>Georgia</button>
                        <button className="butt" onClick={() => this.handleClick("North%20Carolina")}>North Carolina</button>
                        <button className="butt" onClick={() => this.handleClick("Michigan")}>Michigan</button>
                        <button className="butt" onClick={() => this.handleClick("New%20Jersey")}>New Jersey</button>
                        <button className="butt" onClick={() => this.handleClick("Virginia")}>Virginia</button>
                        <button className="butt" onClick={() => this.handleClick("Arizona")}>Arizona</button>
                        <button className="butt" onClick={() => this.handleClick("Massachusetts")}>Massachusetts</button>
                        <button className="butt" onClick={() => this.handleClick("Tennessee")}>Tennessee</button>
                        <button className="butt" onClick={() => this.handleClick("Indiana")}>Indiana</button>
                        <button className="butt" onClick={() => this.handleClick("Missouri")}>Missouri</button>
                        <button className="butt" onClick={() => this.handleClick("Maryland")}>Maryland</button>
                        <button className="butt" onClick={() => this.handleClick("Wisconsin")}>Wisconsin</button>
                        <button className="butt" onClick={() => this.handleClick("Colorado")}>Colorado</button>
                        <button className="butt" onClick={() => this.handleClick("Minnesota")}>Minnesota</button>
                        <button className="butt" onClick={() => this.handleClick("South%20Carolina")}>South Carolina</button>
                        <button className="butt" onClick={() => this.handleClick("Alabama")}>Alabama</button>
                        <button className="butt" onClick={() => this.handleClick("Lousiana")}>Lousiana</button>
                        <button className="butt" onClick={() => this.handleClick("Kentucky")}>Kentucky</button>
                        <button className="butt" onClick={() => this.handleClick("Oregan")}>Oregan</button>
                        <button className="butt" onClick={() => this.handleClick("Oklahoma")}>Oklahoma</button>
                        <button className="butt" onClick={() => this.handleClick("Connecticut")}>Connecticut</button>
                        <button className="butt" onClick={() => this.handleClick("Utah")}>Utah</button>
                        <button className="butt" onClick={() => this.handleClick("Iowa")}>Iowa</button>
                        <button className="butt" onClick={() => this.handleClick("Nevada")}>Nevada</button>
                        <button className="butt" onClick={() => this.handleClick("Arkansas")}>Arkansas</button>
                        <button className="butt" onClick={() => this.handleClick("Mississippi")}>Mississippi</button>
                        <button className="butt" onClick={() => this.handleClick("Kansas")}>Kansas</button>
                        <button className="butt" onClick={() => this.handleClick("New%20Mexico")}>New Mexico</button>
                        <button className="butt" onClick={() => this.handleClick("Nebraska")}>Nebraska</button>
                        <button className="butt" onClick={() => this.handleClick("West%20Virginia")}>West Virginia</button>
                        <button className="butt" onClick={() => this.handleClick("Idaho")}>Idaho</button>
                        <button className="butt" onClick={() => this.handleClick("Hawaii")}>Hawaii</button>
                        <button className="butt" onClick={() => this.handleClick("New%20Hampshire")}>New Hampshire</button>
                        <button className="butt" onClick={() => this.handleClick("Montana")}>Montana</button>
                        <button className="butt" onClick={() => this.handleClick("Rhode%20Island")}>Rhode Island</button>
                        <button className="butt" onClick={() => this.handleClick("Delaware")}>Delaware</button>
                        <button className="butt" onClick={() => this.handleClick("North%20Dakota")}>North Dakota</button>
                        <button className="butt" onClick={() => this.handleClick("South%20Dakota")}>South Dakota</button>
                    </div>
                    <div className="col" style={feed}>
                        <p style={card_st}>
                            Latest News on COVID-19
                        </p>
                        {items.map(item => 
                            <Feedcard title={item.name} desc={item.description} url={item.url} provider={item.provider[0].name}/>    
                        )}
                        
                    </div>
                </div>
            </div>
    );
  }
}