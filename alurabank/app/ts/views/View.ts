import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {
    private _elemento: JQuery;
    private _escapar: boolean;

    /*
    Quando colocamos ? logo após o parâmetro, esse valor é opcional, sendo como padrão false.
    Além disso, os parâmetros opcionais precisam ser os últimos no construtor.
    */
    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao(true)
    update(model: T): void {
        let template = this.template(model)
        if(this._escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);
    }

    abstract template(model: T): string;
}


/*
    Quando trabalhamos com herança e sobrescrita de métodos
    caso as filhas tenham tipagens diferentes, é necessário que a classe pai tenha um tipo genérico
    no caso de View por exemplo declamos como View<T>, pois o <T> é a tipagem genérica dessa classe.
    No caso de NegociacoesView e MensagemView, cada classe tem sua tipagem, mas é necessário colocar no
    extends View<TIPO A SER USADO>, seja string, int, ou qualquer outro tipo.


    Durante o curso mudei o atributo _elemento para protected, para que pudesse ser acessado pelas classes filhas,
    devido a herança. Porém com defini uma classe genérica, não há necessidade de afrouxamento no encapsulamento.

    Outra mudança é ter definido a class view como Abstract para que ela não possa ser instanciada diretamente.
    É necessário implementar uma classe filha.
    O mesmo vále para o método abstrato template.
*/