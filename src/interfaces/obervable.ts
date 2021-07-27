export type Listener<EventType> = (ev: EventType) => void;

export interface Observable<EventType> {
    subscribe: (listener: Listener<EventType>) => () => void;
    publish: (event: EventType) => void;
}