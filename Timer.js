// import React from 'react';

// export class Timer extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         }
//         this.startTimer = this.startTimer.bind(this)
//         this.stopTime = this.stopTimer.bind(this)
//     }

//     startTimer(){
//         this.timer = setInterval(() =>
//             this.setState({
//                 count : this.state.count + 1
//         }), 1000)
//     }

//     stopTimer(){
//         clearInterval(this.timer);
//     }
    
//     getSeconds(){
//         return ('0' + this.state.count % 60).slice(-2);
//     }

//     getMinutes(){
//         return Math.floor('0' + this.getSeconds() / 60);
//     }

//     getHours(){
//         return Math.floor('0' + this.getMinutes() / 60);
//     }

//     timeUpdate = () => {
//         setInterval(() => {
//             this.setState( {count: this.state.count})}, 1000);
//     }

//     render(){
//         return(
//             <div className="App">
//                 <div><h3>Odpracovany cas:{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h3>{this.timeUpdate()}
//                     <div>
//                     <button type="button" onClick = {this.startTimer}
//                     >Prichod</button>
//                     <button type="button" onClick = {this.stopTimer}
//                     >Odchod</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }



