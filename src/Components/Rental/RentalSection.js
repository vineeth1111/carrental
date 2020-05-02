import React, {Component} from 'react';
import RentalCard from './RentalCard';

class RentalSection extends Component{

    render(){

        let carArr =[]
        for(var i =0; i<5; i++){
            carArr.push(<RentalCard/>)
        }
        return(
            <div>
                {carArr}
            </div>
        );
    }
}
export default RentalSection;