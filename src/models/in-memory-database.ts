import { BaseRecord } from "../interfaces/base-record";
import { Database } from "../interfaces/database";

export class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T) {
        this.db[newValue.id] = newValue;
    }

    public get(id: string): T | undefined {
        return this.db[id];
    }
}