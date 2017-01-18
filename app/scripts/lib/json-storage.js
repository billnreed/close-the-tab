class JsonStorage {
  constructor(storage) {
    this._storage = storage;
    this._storageKey = 'JSON_STORAGE';
    this._hash = {};

    if (this._storage[this._storageKey] == undefined) {
      this._store();
    }
  }

  set(key, value) {
    if (this._hash[key] == value) return;

    this._hash[key] = value;
    this._store();
  }

  get(key) {
    return this._retrieve()[key];
  }

  _store() {
    const jsonString = JSON.stringify(this._hash);
    this._storage[this._storageKey] = jsonString;
  }

  _retrieve() {
    const jsonString = this._storage[this._storageKey];
    return JSON.parse(jsonString);
  }
}

export default new JsonStorage(localStorage);
