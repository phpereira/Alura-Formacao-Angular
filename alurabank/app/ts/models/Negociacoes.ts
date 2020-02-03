class Negociacoes {
    // private _negociacoes: Array<Negociacao> = []; /* É a mesma coisa. */
    private _negociacoes: Negociacao[] = [];



    //É uma boa prática tipar os métodos de acordo com seus retornos

    adiciona(negociacao: Negociacao): void // O método adiciona não retorna nada, então tipamos como void.
    {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] //Nesse caso, o retorno perderia a tipagem, devido ao concat.
    { 
        return [].concat(this._negociacoes);
    }
}