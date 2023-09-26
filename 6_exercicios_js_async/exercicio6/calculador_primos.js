class calculadorDeNumerosPrimos {
    constructor() {
        this._encontrados=[2,3]
        this._lastNumberSearched=3
    }
    
    _calcularAte(valor) {
        for (let i = this._lastNumberSearched+2; i < valor; i+=2) {
            if (!this._encontrados.some(e => i%e === 0)) {
                this._encontrados.push(i)
            }
            this._lastNumberSearched=i
        }
    }

    atualizarValoresAte(valor) {
        if (valor > this._lastNumberSearched) {
            this._calcularAte(valor)
        }
    }

    get last() {
        return this._encontrados[this._encontrados.length-1]
    }
};

gerador = new calculadorDeNumerosPrimos()