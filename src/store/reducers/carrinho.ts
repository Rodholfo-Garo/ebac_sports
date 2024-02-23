import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

// Criar Objeto para o Estado inicial do reducer
const initialState: CarrinhoState = {
  itens: []
}

// Criar Slice
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  // Construir mudança de estado
  reducers: {
    // Criando o Reducer (função que recebe um estado inicial e a action)
    adicionar: (state, action: PayloadAction<Produto>) => {
      // Armazenamento do Payload

      const compra = action.payload
      if (state.itens.find((produto) => produto.id === compra.id)) {
        alert('Item Ja Adicionado')
      } else {
        state.itens.push(compra)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
