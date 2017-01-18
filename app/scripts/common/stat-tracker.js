import JsonStorage from '../lib/json-storage'

class StatTracker {
    constructor() {
        this._key = 'stats';
        this._refreshStats();
    }

    addWin() {
        this._addGame(0);
    }

    addLoss(score) {
        this._addGame(score);
    }

    getStats() {
        this._refreshStats();
        return this._stats;
    }

    _addGame(score) {
        this._refreshStats();
        const modeName = JsonStorage.get('mode').name;

        this._stats.push({mode: modeName, score: score});
        this._chompStats();

        JsonStorage.set(this._key, this._stats);
    }

    _chompStats() {
        if (this._stats.length > 10) {
            this._stats.splice(0, 1);;
        }
    }

    _refreshStats() {
        this._stats = JsonStorage.get(this._key) || [];
    }
}

export default new StatTracker();
