import { BaseRecord } from "./base-record";

export interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;
}