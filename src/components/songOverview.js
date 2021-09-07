import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongFilter from "./SongFilter"

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  addSong = (song) => {
    this.setState((prevState) => {
      const newList = prevState.songs.concat(song);
      return {
        songs: newList,
      };
    });
  };

  removeSong = (id) => {
    this.setState((prevState) => {
      const songs = prevState.songs;
      const newList = songs.filter((song, index) => index !== id);
      return {
        songs: newList,
      };
    });
  };

  filterGenre = (event) => {
    this.setState((prevState) => {
      const songs = prevState.songs
      const genre = event.target.value;
      const filteredList = songs.filter(song => song.genre === genre)
      return {
        songs: filteredList
      }
  })
}

  filterRating = (event) => {
    this.setState((prevState) => {
      const songs = prevState.songs
      const rating = event.target.value;
      const filteredList = songs.filter(song => song.rating === rating)
      return {
        songs: filteredList
      }
  })
}

  render() {
    return (
      <div className="song-overview">
        <SongForm onSubmit={this.addSong} />
        <SongFilter songs={this.state.songs} onFilterGenre={this.filterGenre} onFilterRating={this.filterRating}/>
        <table className="song-table" >
          <tbody>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
              <th className="song-row__item">Clean up</th>
            </tr>
          </tbody>
          <SongList
            className="song-list"
            songs={this.state.songs}
            handleClick={this.removeSong}
          />
        </table>
      </div>
    );
  }
}

export default SongOverview;
