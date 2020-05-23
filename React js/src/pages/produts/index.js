import React , { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Product extends Component {
  state = {
    product:{},
  };

  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await api.get(`products/${id}`);
    this.setState({ product: response.data});
  };

  render() {
    const {product} = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          <a href={product.url}>{product.url}</a>
        </p>

        <div className="button">
          <article > <a href="http://localhost:3000/">Voltar</a> </article>
        </div>
        

      </div>
    )
  };


};