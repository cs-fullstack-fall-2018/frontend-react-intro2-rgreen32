import React, {Component} from 'react'
import Child from './Child'

class Netflix extends Component{
    render(){
        var mee = [{
            movieName:"HongKong",
            yearReleased:"2004",
            genre:"Monkeys"

        }
        ,{
            movieName:"Batwoman",
               yearReleased:"2007",
                genre:"Bats"
            }
            ,{
            movueName:"Tron",
                yearReleased:"2010",
                genre:"Bikes"

            }];

        return <div> <Child array={mee}/> </div>


    }
}
export default Netflix
