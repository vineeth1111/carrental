import React, {Component} from 'react';
import RentalSection from './RentalSection';

class Rental extends Component{

    constructor(props){
        super(props)
        console.log("Rental page rendered")

        this.state ={

        }
    }

    render(){
        return(
                <RentalSection/>  
        );
    }
}
export default Rental;