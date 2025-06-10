import ProductItem from './ProductItem';

function App() {
  const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
  const price = 250;
  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZRDVij3RuXMIOrulPp9Z7CsEryJV8yeCIg&usqp=CAU';

  return (
    <div>
      <h1>Home Page</h1>
      <ProductItem image={image} title={title} price={price} />
      <ProductItem
        image={'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'}
        title={'Mens Cotton Jacket'}
        price={600}
      />
    </div>
  );
}

export default App;
