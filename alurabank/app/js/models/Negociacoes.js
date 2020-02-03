class Negociacoes {
    constructor() {
        // private _negociacoes: Array<Negociacao> = []; /* É a mesma coisa. */
        this._negociacoes = [];
    }
    //É uma boa prática tipar os métodos de acordo com seus retornos
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
