class Tiles {
    constructor() {
        this.tiles = Array.from(document.querySelectorAll('.tile'));
        this.selectedTiles = [];
    }

    toggleTile(tileEl) {
        tileEl.classList.toggle('is-selected');
        
        const tileIndex = this.selectedTiles.indexOf(tileEl);

        if (tileIndex == -1) {
            this.selectedTiles.push(tileEl);
        } else {
            this.selectedTiles.splice(tileIndex, 1);
        }
    }

    useSelectedTiles() {
        this.selectedTiles.forEach(tile => {
            tile.classList.add('is-used');
        });
    }

    getSelectedTileSum() {
        return this.selectedTiles.reduce((sum, tileEl) => sum + Number(tileEl.attributes.getNamedItem('data-number').value), 0);
    }

    clearSelected() {
        this.selectedTiles = [];
    }
}

const tiles = new Tiles();

export default tiles;
