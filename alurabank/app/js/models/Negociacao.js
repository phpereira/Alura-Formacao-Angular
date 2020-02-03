class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get Data() {
        return this._data;
    }
    get Quantidade() {
        return this._quantidade;
    }
    get Valor() {
        return this._valor;
    }
    get Volume() {
        return this._quantidade * this._valor;
    }
}
