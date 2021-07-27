import { AfterSetEvent } from './after-set-event';
import { BeforeSetEvent } from './before-set-event';
import { BaseRecord } from "./base-record";
import { Listener } from "./obervable";

export interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;

    onBeforeAdd?(listener: Listener<BeforeSetEvent<T>>): () => void;
    onAfterAdd?(listener: Listener<AfterSetEvent<T>>): () => void;
}