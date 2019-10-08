class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "PRODUCT ITEM NUMBER 1",
          image: "https://via.placeholder.com/200x150",
          description: "Description for product item number 1",
          price: 59999999,
          quantity: 2
        },
        {
          name: "PRODUCT ITEM NUMBER 2",
          image: "https://via.placeholder.com/200x150",
          description: "Description for product item number 2",
          price: 9999999,
          quantity: 1
        },
        {
          name: "PRODUCT ITEM NUMBER 3",
          image: "https://via.placeholder.com/200x150",
          description: "Description for product item number 3",
          price: 1234567800,
          quantity: 1
        },
        {
          name: "PRODUCT ITEM NUMBER 4",
          image: "https://via.placeholder.com/200x150",
          description: "Description for product item number 4",
          price: 9.99,
          quantity: 1
        },
        {
          name: "PRODUCT ITEM NUMBER 5",
          image: "https://via.placeholder.com/200x150",
          description: "Description for product item number 5",
          price: 9.99,
          quantity: 1
        }
      ]
    };
  }

  render() {
    const product = this.state.products.map(product => {

    return (
      <li className="row">
        <div className="col left">
          <div className="thumbnail">
            <a href="#">
              <img src={product.image} alt={product.image} />
            </a>
          </div><br/>
          <div className="detail">
            <div className="name">
              <a href="#">{product.name}</a>
            </div>
            <div className="description">{product.description}</div>
            <div className="price">
            {new Intl.NumberFormat('en-GB', { 
          style: 'currency', 
          currency: 'VND',
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }).format(product.price)}</div>
          </div>
        </div>
        <div className="col right">
          <div className="quantity">
            <input
              type="number"
              className="quantity"
              step={1}
              defaultValue={product.quantity}
            />
          </div>
          <div className="remove">
            <svg
              version="1.1"
              className="close"
              xmlns="//www.w3.org/2000/svg"
              xmlnsXlink="//www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 60 60"
              enableBackground="new 0 0 60 60"
              xmlSpace="preserve"
            >
              <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
            </svg>
          </div>
        </div>
      </li>
    );
    });


    return (
      <section className="container">
        <ul className="product">{product}</ul>
      </section>
    );
  }
  }


