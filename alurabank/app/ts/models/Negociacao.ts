class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

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