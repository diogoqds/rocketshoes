import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <li key={i}>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe2.jpg?resize=326:*"
            alt="tenis"
          />
          <strong>Tênis muito legal</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={20} color="#fff" />
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
