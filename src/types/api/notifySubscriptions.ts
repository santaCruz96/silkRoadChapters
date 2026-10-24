export type NotifySubscribeStatus =
    | 'subscribed'
    | 'invalidEmail'
    | 'alreadyAvailable'
    | 'notFound'
    | 'tooManyRequests'
    | 'error';

export interface NotifySubscriptionInfo {
    subscribed: boolean,
    email: string | null
}
