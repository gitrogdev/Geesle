/**
 * String literal values representing the possible options for lyric archives to
 * pull from.
 *
 * @author gitrog
 */
export const LyricOption = {
	/** The archive containing all song lyrics known by the bot. */
	Lyric: 'LYRIC'
} as const;

export type LyricOption = typeof LyricOption[keyof typeof LyricOption];