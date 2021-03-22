import React, { Component } from 'react';
import './Counter.css';


//Komponent klasowy:
class Counter extends Component {
    render() {

//      let randomNumber = Math.floor(Math.random() * 108) + 1;

        return (
            <div className='counter'>
                Counter:
                <span className='value'>
 
 {this.props.initValue}
                </span>
            </div>
        );
    }
}
export default Counter;



//Komponent funkcyjny:
// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * 108) + 1;

//     return (
//         <div className='counter'>
//             Counter:
//             <span className='value'>
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;