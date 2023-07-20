"use strict";
function make_album(artist, album, tracks) {
    if (!tracks)
        return { artist_name: artist, album_name: album };
    else
        return { artist_name: artist, album_name: album, no_of_tracks: tracks };
}
let xm = 9990000000;
let rock_album = new Map();
let album_info = make_album("Maroof", "Rocking Star");
console.log(`\nObject for Album 1: \n `, album_info);
rock_album.set("Album 1", album_info);
console.log(`\nAlbum 1 stored in the dictionary like as under: \n `, rock_album);
let romantic_album = new Map();
album_info = make_album("zain", "The ISHQ");
console.log(`\nObject for Album 2: \n `, album_info);
romantic_album.set("Album 2", album_info);
console.log(`\nAlbum 2 stored in the dictionary like as under: \n `, romantic_album);
let modern_album = new Map();
album_info = make_album("zain", "The ISHQ 21st");
console.log(`\nObject for Album 3: \n `, album_info);
modern_album.set("Album 3", album_info);
console.log(`\nAlbum 3 stored in the dictionary like as under: \n `, modern_album);
let classic_album = new Map();
album_info = make_album("Aslam", "Jawani", 4);
console.log(`\nObject for Album 3: \n `, album_info);
classic_album.set("Album 3", album_info);
console.log(`\nAlbum 3 stored in the dictionary like as under: \n `, classic_album);
