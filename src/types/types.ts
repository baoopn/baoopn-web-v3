export interface SpotifyPlayingTrack {
	albumImageUrl?: string
	title?: string
	artist?: string
	isPlaying: boolean
	songUrl?: string,
	id?: string
	progress_ms?: number
	duration_ms?: number
}

export interface SpotifyRecentTrack {
	albumImageUrl: string
	title: string
	artist: string
	songUrl: string
	playedAt: string
}