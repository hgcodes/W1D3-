var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var id in library.playlists) {
  console.log(library.playlists[id].id + ": " + library.playlists[id].name + " - " +
    library.playlists[id].tracks.length + " tracks");
  }
}

printPlaylists(library);


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var id in library.tracks) {
  console.log(library.tracks[id].id + ": " + library.tracks[id].name + " by " +
    library.tracks[id].artist + " " + "(" + library.tracks[id].album + ")");
  }
}

printTracks(library);


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var printTracks  = function (tracks) {
    tracks.forEach(function(id) {
      console.log(library.tracks[id].id + ": " + library.tracks[id].name + " by " +
    library.tracks[id].artist + " " + "(" + library.tracks[id].album + ")");
    });
  }
  for (var id in library.playlists) {
    if (id === playlistId) {
      var playlist = library.playlists[playlistId];

      console.log(playlist.id + ":" + playlist.name + " - " +
        playlist.tracks.length + " tracks");
    }
  }

 var trackList = library.playlists[playlistId].tracks;
 printTracks(trackList);
}

printPlaylist('p02');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var id = trackId;
  var playlist = playlistId;

  var tracks = library.playlists[playlistId].tracks;
  tracks.push(trackId);
}

addTrackToPlaylist("t01", "p02");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  library.tracks[newId] = {
    id: newId,
    name: name,
    artist: artist,
    album: album

  };
}

addTrack("Name", "Artist", "Album");

// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid();
  library.playlists[newId] = {
    id: newId,
    name: name,
  };
}

addPlaylist("Super Fun Time Playlist");
console.log(library.playlists);
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}