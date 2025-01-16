// types/Track.ts
export interface Artist {
  name: string;
  mbid: string;
  url: string;
}

export interface Track {
  name: string;
  artist: Artist;
  url: string;
  image: Array<{ "#text": string; size: string }>;
  listeners: string;
  duration: string;
  mbid: string;
}

export interface LastFmResponse {
  tracks: {
    track: Track[];
  };
}
