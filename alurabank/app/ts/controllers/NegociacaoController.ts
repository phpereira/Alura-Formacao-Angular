import { NegociacoesViews, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index'
import { NegociacaoService, handlerFunction } from '../services/NegociacaoService';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes;
    private _negociacoesView = new NegociacoesViews('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {
        /* 
           Com JQuery jquery atualizado, é necessário usar o toString para funcionar.
           Com strictNullChecks eu preciso definir que estou receber um number para converter para String.
        */
        let data = new Date((this._inputData.val() as number).toString());
        if (!this._DiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis.')
            return;
        }

        const negociacao = new Negociacao(
            data,
            Number(this._inputQuantidade.val()),
            Number(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

    }

    private _DiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }


    @throttle()
    importaDados() {
        this._service
            .obterNegociacoes(res => {
                if (res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText)
                }
            })
            .then(negociacoes => {

                negociacoes.forEach(negociacao =>
                    this._negociacoes.adiciona(negociacao));

                this._negociacoesView.update(this._negociacoes);
            })
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}