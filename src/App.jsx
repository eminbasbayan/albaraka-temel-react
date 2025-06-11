import Products from './components/Products/Products';
import Button from './components/UI/Button';

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Button title={'Sepete Ekle'} color="success" size="lg" />
      <br />
      <br />
      <Button title={'Ürünü Güncelle'} color="primary"/>
      <br />
      <br />
      <Button title={'Ürünü Sil'} color="danger" size="sm" />
      <Button />
      {/* <Products /> */}
    </div>
  );
}

export default App;
