import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AxiosInstance from '../../api/AxiosInstance';
import styles from './gridproduto.module.css';

const GridProduto = () => {
    const[produto, setProduto] = useState([]);

    useEffect(() => {
      getProdutos();
    }, []);

    const getProdutos = async () => {
        AxiosInstance.get(
            `/products`
          )
          .then(result => { 
            console.log('result data: ' + JSON.stringify(result.data));
            setProduto(result.data);
          });
    }

    return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Descrição</th>
          <th>Imagem</th>
        </tr>
      </thead>
      <tbody>
        {
          produto.map((k, i) => (
            <tr>
              <td>{k.id}</td>
              <td>{k.title}</td>
              <td>{k.price}</td>
              <td>{k.category}</td>
              <td>{k.description}</td>
              <td className={styles.colImg}><img src={k.image} width={50} height={50} alt={k.title} /></td>
            </tr>
          ))
        }
      </tbody>
    </Table>        
    );
}

export default GridProduto;