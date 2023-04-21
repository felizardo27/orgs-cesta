import logo from '../../assets/logo.png';

import abobora from '../../assets/frutas/Abóbora.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'
import tomate from '../../assets/frutas/Tomate.png'

const cesta = {
    topo: {
        titulo: 'Detalhes da cesta'
    },
    detalhes: {
        nome: 'Cesta de verduras',
        imagemFazenda: logo,
        nomeFazenda: 'Jenny Jack Farm',
        descricao: 'Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha',
        preco: 'R$ 40,00',
        botao: 'Comprar',
    },
    itens: {
        titulo: 'Itens da cesta',
        lista: [
            {
                nome: 'Abóbora',
                imagem: abobora,
            },
            {
                nome: 'Batata',
                imagem: batata,
            },
            {
                nome: 'Brócolis',
                imagem: brocolis
            },
            {
                nome: 'Pepino',
                imagem: pepino,
            },
            {
                nome: 'Tomate',
                imagem: tomate,
            },
        ]
    }
}

export default cesta