export interface PlaybackResponse {
    embedUrl: string,
    expiresAt: string
}

export type PlaybackResult =
    | { status: 'ok', embedUrl: string }
    | { status: 'unauthorized' | 'noAccess' | 'error' };
