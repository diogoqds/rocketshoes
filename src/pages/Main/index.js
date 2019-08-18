import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from './styles';

export default function Main() {
  return (
    <div>
      <Title>Main</Title>
      <Link to="repository">repositórios</Link>
    </div>
  );
}
