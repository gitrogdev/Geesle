/**
 * Information about the .mp3 metadata for a song.
 *
 * @author gitrog
 *
 * @example
 * {
 * 	title: 'Cobra',
 * 	artist: 'Geese',
 * 	album: 'Getting Killed',
 * 	song: 'cobra.mp3',
 * 	duration: 186
 * 	year: 2025
 * }
 */
export default interface SongMetadata {
	/** The title of the song. */
	title: string | undefined,

	/** The artist(s) of the song. */
	artist: string | undefined,

	/** The album or other release that the song is on. */
	album: string | undefined,

	/** The filename of the song, including the .mp3 extension. */
	song: string,

	/** The duration of the song, in seconds. */
	duration: number | undefined,

	/** The year the song was released. */
	year: number | undefined
}