const library = {
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
},
     
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////
     
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists: function () {
       for (let playlistId in this.playlists) {
         const playlist = this.playlists[playlistId];
         const trackCount = playlist.tracks.length;
         console.log(`${playlistId}: ${playlist.name} - ${trackCount} tracks`);
       }
     },
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks: function() {
  for (let trackId in this.tracks) {
    const track = this.tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
         
  }
},
        
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist: function(playlistId) {
  const playlist = this.playlists[playlistId];
  console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
     
  playlist.tracks.forEach(trackId => {
    const track = this.tracks[trackId];
    console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
  });
},

     
     
// adds an existing track to an existing playlist
     
addTrackToPlaylist : function(trackId, playlistId) {
  let playlist = this.playlists[playlistId];
  if (!playlist.tracks.includes(trackId)) {
    playlist.tracks.push(trackId);
    console.log(`Track ${trackId} has been added to playlist ${playlistId}`);
  } else {
    console.log(`Track ${trackId} already exists in playlist ${playlistId}`);
  }
},
     
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
     
     
// adds a track to the library
caddTrack : function(name, artist, album) {
  const newTrackId = generateUid();
     
  const newTrack = {
    id: newTrackId,
    name,
    artist,
    album
  };
     
  this.tracks[newTrackId] = newTrack;
     
  console.log(`New track ${newTrackId} has been added to the library.`);
},
     
// adds a playlist to the library
addPlaylist : function(name) {
  const newPlaylistID = generateUid();
     
  const newPlaylist = {
    id: newPlaylistID,
    name,
    tracks: []
  };
  this.playlists[newPlaylistID] = newPlaylist;
     
  console.log(`New playlist ${newPlaylistID} (${name}) has been added to the library.`);
},