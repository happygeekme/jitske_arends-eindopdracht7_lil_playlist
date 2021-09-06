import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  addSong = (song) => {
    console.log(song);
    this.setState((prevState) => {
      console.log(prevState);
      const newList = prevState.songs.concat(song);
      return {
        songs: newList,
      };
    });
  };

  removeSong = (id) => {
    console.log(id);
    this.setState((prevState) => {
      const songs = prevState.songs;
      const newList = songs.filter((song, index) => index !== id);
      console.log(newList);
      return {
        songs: newList,
      };
    });
  };

  render() {
    return (
      <div className="song-overview">
        <SongForm onSubmit={this.addSong} />
        <table className="song-table">
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
