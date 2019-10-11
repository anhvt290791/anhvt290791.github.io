class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "PRODUCT ITEM NUMBER 1",
          image: "https://via.placeholder.com/200x200",
          description: "Sản phẩm này quá đắt",
          price: 59999999,
          quantity: 2
        },
        {
          id: 2,
          name: "PRODUCT ITEM NUMBER 2",
          image: "https://via.placeholder.com/200x200",
          description: "Description for product item number 2",
          price: 9999999,
          quantity: 1
        },
        {
          id: 3,
          name: "PRODUCT ITEM NUMBER 3",
          image: "https://via.placeholder.com/200x200",
          description: "Description for product item number 3",
          price: 1234567800,
          quantity: 1
        },
        {
          id: 4,
          name: "PRODUCT ITEM NUMBER 4",
          image: "https://via.placeholder.com/200x200",
          description: "Description for product item number 4",
          price: 9.99,
          quantity: 1
        },
        {
          id: 5,
          name: "PRODUCT ITEM NUMBER 5",
          image: "https://via.placeholder.com/200x200",
          description: "Description for product item number 5",
          price: 9.99,
          quantity: 1
        }
      ]
    };
  }
  removeProduct(id){
    
    // console.log(id);
    // const newProduct = this.state.products.filter(product => {
    //   return product.id !== id;
    // });
    // this.setState({
    //   products: newProduct
    // });

    const newProduct = this.props.products.filter(product=> product.id !== id)
    if (window.confirm('Are you sure you wish to delete this item?')){
    this.setState({products: newProduct})
    }
    }
    
    calculateTotalQuantity() {
      let totalQuantity = 0;
      this.state.products.forEach(function (product) {
        totalQuantity += +parseFloat(product.quantity);
      });
      
      // this.setState({
      //   "totalQuantity": totalQuantity
        
      // });
      console.log(totalQuantity);
    }
   
    
    render() {
      return (
        <section className="container">
          <MyHeader calculateTotalQuantity={this.calculateTotalQuantity()}/>
          <Products products={this.state.products} onRemove={this.removeProduct.bind(this)}/>
          <Checkout />
        </section>
      );
    }
    }
  
  
  