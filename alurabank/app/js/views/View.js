class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
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
