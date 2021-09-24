exports.PARTS = {
    Search: 'snippet',
    Videos: 'snippet,contentDetails,statistics',
    Playlists: 'snippet',
    PlaylistItems: 'snippet,status',
    Channels: 'snippet'
};

exports.TYPES = {
    Search: 'video'
};

exports.KINDS = {
    Video: 'youtube#video',
    PlaylistItem: 'youtube#playlistItem',
    Playlist: 'youtube#playlist',
    SearchResult: 'youtube#searchResult',
    Channel: 'youtube#channel'
};

exports.ENDPOINTS = {
    PlaylistItems: 'playlistItems',
    Channels: 'channels',
    Videos: 'videos',
    Playlists: 'playlists',
    Search: 'search'
};
