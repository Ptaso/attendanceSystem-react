import React from 'react';

export default class Time extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }

    }


    timeUpdate = () => {
        setInterval(() => {
            this.setState( {date : new Date()})}, 1000);
    };

    render(){
        return(
            <div className="loginForm">
                {this.state.date.toLocaleTimeString()}
                {this.timeUpdate()}
            </div>
        );
    }
}



