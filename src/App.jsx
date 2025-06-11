import Products from './components/Products/Products';
import Button from './components/UI/Button';

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Button color="success" size="lg">
        Sepete Ekle
      </Button>
      <br />
      <br />
      <Button color="primary">Ürünü Güncelle</Button>
      <br />
      <br />
      <Button color="danger" size="sm">
        Ürünü Sil
      </Button>

      <Button color="success">
        <b>Kaydet</b>
      </Button>
      {/* <Products /> */}
    </div>
  );
}

export default App;
