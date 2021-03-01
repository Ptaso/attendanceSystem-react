import React from 'react';

export default class Countries extends React.Component {
    state = {
        countries: [],
        selectedCountry: ""
    }

    
    
    async componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({countries: data});
    }

    

    render(){
        return(
            <div className="app">          
                <select className="input" value={this.state.selectedCountry}
                onChange={(e) => this.setState({selectedCountry: e.target.value})}>
                    {this.state.countries.map((country) => (<option value={country.name} key={country.name}>{country.name}</option>))}
                </select>
            </div>
        )
    }
}

