import { MeuObjeto } from './MeuObjeto';
import { Negociacao } from './Negociacao';

export class Negociacoes implements MeuObjeto<Negociacoes> {
    // private _negociacoes: Array<Negociacao> = []; /* É a mesma coisa. */
    private _negociacoes: Negociacao[] = [];


    //É uma boa prática tipar os métodos de acordo com seus retornos

    adiciona(negociacao: Negociacao): void // O método adiciona não retorna nada, então tipamos como void.
    {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] //Nesse caso se não tipar, o retorno perderia a tipagem automática, devido ao concat.
    {
        return ([] as Negociacao[]).concat(this._negociacoes);
        //Como usei strictNullChecks e estou usando uma programação defensiva, eu preciso definir esse array [] as Negociacao[]
    }

    paraTexto(): void {
        console.log("Impressão:");
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}