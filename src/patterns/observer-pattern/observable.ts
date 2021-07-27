import { AfterSetEvent } from './../../interfaces/after-set-event';
import { Listener } from './../../interfaces/obervable';
import { BeforeSetEvent } from './../../interfaces/before-set-event';
import { BaseRecord } from "../../interfaces/base-record";
import { Database } from "../../interfaces/database";
import { createObserver } from './observer';

export function createDatabase_observable<T extends BaseRecord>() {
    class InMemoryDatabase implements Database<T> {
        private db: Record<string, T> = {};
        
        static instance: InMemoryDatabase = new InMemoryDatabase();

        private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
        private afterAddListeners = createObserver<AfterSetEvent<T>>();

        private constructor() {}
    
        public set(newValue: T) {
            this.beforeAddListeners.publish({
                newValue,
                value: this.db[newValue.id]
            });
            this.db[newValue.id] = newValue;
            this.afterAddListeners.publish({
                value: newValue
            })
        }
    
        public get(id: string): T | undefined {
            return this.db[id];
        }

        onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
            return this.beforeAddListeners.subscribe(listener);
        }

        onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
            return this.afterAddListeners.subscribe(listener);
        }
    }

    return InMemoryDatabase;
}