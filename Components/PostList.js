import React, { Component } from 'react'
import PostData from './db.json'
class PostList extends Component {
    render (){
        return(
            <div>
                {PostData.movies.map((movieDetail, index) => {
                    return <div>
                    <h1>{movieDetail.title} year: {movieDetail.year}</h1>
                    <h2>Directors: {movieDetail.actors}</h2>
                    <h2>Actors: {movieDetail.director}</h2>
                    <p>Plot: {movieDetail.plot}</p>
                    </div>
                })}
            </div>
        )
    }
}
export default PostList