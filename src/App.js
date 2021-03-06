import React, { Component } from 'react';
import logo from './logo.svg';
import "./App.css";
import Products from './components/Products';
import Filter from './components/Filter';
class App extends Component {
  constructor(props){
    super(props);
    this.state = { products:[], filteredProducts: []};
  }
  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data

    }));
  }
  render(){
  return (
    <div className="container">
<h1>Susannes Shoping Cart</h1>
<hr/>
<div className="row">
  <div className="col-md-8">
<Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length} />
<hr/>
<Products products={this.state.filteredProducts} handledAddToCart={this.handledAddToCart}/>
  </div>
  <div className="col-md-4">

  </div>
</div>
      
    </div>
  );
}
}

export default App;
