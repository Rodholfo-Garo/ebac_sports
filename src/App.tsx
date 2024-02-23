import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // Estado do Produto
  const [produtos, setProdutos] = useState<Produto[]>([])
  // Estado do Carrinho, não usamos pq construimos um Reducer p ele
  // const [carrinho, setCarrinho] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  // Requisição da API
  // useEffect(() => {
  //   fetch('/api/ebac_sports')
  //     .then((res) => res.json())
  //     .then((res) => setProdutos(res))
  // }, [])

  // Adiconar Item ao carrinho
  // function adicionarAoCarrinho(produto: Produto) {
  //   if (carrinho.find((p) => p.id === produto.id)) {
  //     alert('Item já adicionado')
  //   } else {
  //     setCarrinho([...carrinho, produto])
  //   }
  // }

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        {/* Itens passados como uma propriedade para HEADER */}
        <Header favoritos={favoritos} />

        {/*  */}
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </Provider>
  )
}

export default App
