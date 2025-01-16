// lib/fetchTracks.ts
import { LastFmResponse } from "../types/Track";

const fetchTracks = async (endpoint: string): Promise<LastFmResponse> => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const getTrackAndArtist = async (endpoint: string) => {
  const data = await fetchTracks(endpoint);
  const tracks = data.tracks.track.map((track) => ({
    trackName: track.name,
    artistName: track.artist.name,
  }));
  return tracks;
};
