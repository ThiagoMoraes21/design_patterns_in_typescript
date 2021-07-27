import { BaseRecord } from "../../interfaces/base-record";
import { Database } from "../../interfaces/database";

export function createDatabase_singleton<T extends BaseRecord>() {
    class InMemoryDatabase implements Database<T> {
        private db: Record<string, T> = {};

        static instance: InMemoryDatabase = new InMemoryDatabase();

        private constructor() {}
    
        public set(newValue: T) {
            this.db[newValue.id] = newValue;
        }
    
        public get(id: string): T | undefined {
            return this.db[id];
        }
    }

    // const db = new InMemoryDatabase();
    // return db;
    return InMemoryDatabase;
}