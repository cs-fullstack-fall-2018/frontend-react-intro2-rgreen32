import React, {Component} from 'react';

class Child extends Component{
    render(){
        var movies = this.props.array.map(
            eachItem=> {
                return (
                    <div>
                        <h1>{eachItem.movieName}</h1>
                        <h1>{eachItem.yearReleased}</h1>
                        <h1>{eachItem.genre}</h1>
                    </div>
                )
            }
        )
        return movies;
    }
}

export default Child