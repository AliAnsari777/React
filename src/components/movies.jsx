import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import {deleteMovie} from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(), // this is a call to imported method that return array of movies
    count: getMovies().length, // this is only for finding number of elements in array, it use in delete to reduce number of movies after deleting them
  };

  // this method loop through the movies object and generate a row for each movie, each row has unique id.
  listMovies() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.delete(movie._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  // this method is for deleting movies.
  delete = (id) => {
    const {count} = this.state; // destructing  "count" from "state"
    deleteMovie(id); // imported method from fakeMovieService
    this.setState({count: count - 1}); // update state
  };

  // it has one if condition that hide table if we delete all the movies in table
  hideEmptyTable() {
    const {count} = this.state; // destructing "count" from "state"
    if (count === 0) return <h3>There is no movie in the database</h3>;

    return (
      <React.Fragment>
        <h1>Showing {count} movies in database</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.listMovies()}</tbody>
          {/* calling the listMovie method to generate list of movies in table rows */}
        </table>
      </React.Fragment>
    );
  }

  // actual render method of our component
  render() {
    return this.hideEmptyTable();
  }
}

export default Movies;
