import { Listener, Observable } from './../../interfaces/obervable';

export function createObserver<EventType>(): Observable<EventType> {
    let listeners: Listener<EventType>[] = [];

    return {
        subscribe: (listener: Listener<EventType>): () => void => {
            listeners.push(listener);
            return () => {
                listeners = listeners.filter(l => l !== listener)
            }
        },
        publish: (event: EventType): void => {
            listeners.forEach(listener => listener(event));
        }
    }
}