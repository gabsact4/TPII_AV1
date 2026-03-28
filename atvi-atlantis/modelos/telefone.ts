import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo {
    public ddd: Number
    public numero: Number

    public clonar(): Prototipo {
        const telefone = new Telefone()
        telefone.ddd = this.ddd
        telefone.numero = this.numero
        return telefone
    }
}