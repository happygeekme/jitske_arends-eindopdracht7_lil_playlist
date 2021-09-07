import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongFilter from "./SongFilter";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          title: "Rain down on me",
          artist: "Kane",
          genre: "Rock",
          rating: "4",
        },
        {
          title: "Sunrise",
          artist: "Norah Jones",
          genre: "Jazz",
          rating: "5",
        },
        {
          title: "Someone like you",
          artist: "Adele",
          genre: "Pop",
          rating: "4",
        },
        {
          title: "Love Tonight",
          artist: "Shouse (David Guetta remix)",
          genre: "dance",
          rating: "3",
        },
        {
          title: "Back to Black",
          artist: "Amy Winehouse",
          genre: "Jazz",
          rating: "5",
        },
        {
          title: "Michel",
          artist: "Anouk",
          genre: "Pop",
          rating: "4",
        },
        {
          title: "High Noon",
          artist: "Kruder & Dorfmeister",
          genre: "lounge",
          rating: "3",
        },
        {
          title: "Brush your hair",
          artist: "GoldFish",
          genre: "dance",
          rating: "3",
        },
      ],
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
      const songs = prevState.songs;
      const genre = event.target.value;
      const filteredList = songs.filter((song) => song.genre === genre);
      return {
        songs: filteredList,
      };
    });
  };

  filterRating = (event) => {
    this.setState((prevState) => {
      const songs = prevState.songs;
      const rating = event.target.value;
      const filteredList = songs.filter((song) => song.rating === rating);
      return {
        songs: filteredList,
      };
    });
  };

  render() {
    return (
      <div className="song-overview">
        <SongForm onSubmit={this.addSong} />
        <SongFilter
          songs={this.state.songs}
          onFilterGenre={this.filterGenre}
          onFilterRating={this.filterRating}
        />
        <table className="song-table">
          <tbody>
            <tr className="song-header">
              <th className="column-song">Song</th>
              <th className="column-artist">Artist</th>
              <th className="column-genre">Genre</th>
              <th className="column-rating">Rating</th>
              <th className="column-remove"></th>
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
