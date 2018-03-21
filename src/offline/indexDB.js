import { remoteConfig } from "../utils/db-config";
import idb from 'idb'

const DBName = remoteConfig.indexDB.name
const TBName = remoteConfig.indexDB.tableName

const dbPromise = idb.open(DBName, 1, upgradeDB => {
    upgradeDB.createObjectStore(TBName);
});

// static method
const IndexDB = {
    get(key) {
        return dbPromise.then(db => {
            return db.transaction(TBName)
            .objectStore(TBName).get(key);
        });
    },
    set(key, val) {
        return dbPromise.then(db => {
            const tx = db.transaction(TBName, 'readwrite')
            tx.objectStore(TBName).put(val, key);
            return tx.complete;
        })
    },
    delete(key) {
        return dbPromise.then(db => {
            const tx = db.transaction(TBName, 'readwrite')
            tx.objectStore(TBName).delete(key);
            return tx.complete;
        })
    },
    clear() {
        return dbPromise.then(db => {
            const tx = db.transaction(TBName, 'readwrite')
            tx.objectStore(TBName).clear();
            return tx.complete;
        })
    },
    keys() {
        return dbPromise.then(db => {
            const tx = db.transaction(TBName);
            const keys = [];
            const store = tx.objectStore(TBName);

            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // openKeyCursor isn't supported by Safari, so we fall back
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });

            return tx.complete.then(() => keys);
        });
    }
}

export default IndexDB