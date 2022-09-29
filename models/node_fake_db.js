

module.exports = class List {
    list = [];

    constructor() {
        this.list = [
            {
                id: 1,
                titulo: 'Livro do desassossego',
                autor: 'Fernando Pessoa',
                isbn: 8535908498,
                resumo: 'O narrador principal (mas não exclusivo) das centenas de fragmentos que compõem este livro é o "semi-heterônimo" Bernardo Soares. Ajudante de guarda-livros na cidade de Lisboa...',
                ano_lancamento: 2006
            },
            {
                id: 2,
                titulo: 'A Arte da Guerra',
                autor: ' Sun Tzu',
                isbn: 6556600490,
                resumo: 'Escrito há mais de 2.500 anos, o texto ultrapassa seu contexto militar e apresenta lições fundamentais para o crescimento interior e profissional...',
                ano_lancamento: 2001
            },
            {
                id: 3,
                titulo: 'XXXX',
                autor: 'José',
                isbn: 56746,
                resumo: 'YYY',
                ano_lancamento: 2022
            },
            {
                id: 4,
                titulo: 'XXXX',
                autor: 'Maria',
                isbn: 121212,
                resumo: 'YYY',
                ano_lancamento: 2000
            }
        ]
    }

    save(entity) {
        entity.id = this.list[this.list.length - 1].id + 1;
        this.list.push(entity);
    }

    update(id, entity) {
        const index = this.existsBy(id)
        this.list[index] = { ...entity, id: parseInt(id) };
    }

    findById(id) {
        return this.list.find(list => list.id == id)
    }

    findAll() {
        return this.list;
    }

    count() { }

    del(id) { 
        const index = this.existsBy(id)
        this.list.splice(index, 1)
    }

    existsBy(id) {
        return this.list.findIndex(item => item.id == id);
    }
}