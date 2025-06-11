import { useState } from 'react';
import Products from './components/Products/Products';

function App() {
  const [state, setState] = useState("Emre");
  //   let customerName = 'Emre';

  function handleChange() {
    // customerName = 'Ahmet';

    // state = "Ahmet" --- yanlış

    setState('Ahmet');
  }

  console.log("re-rendered!");
  


  return (
    <div>
      <h1>App Component</h1>
      <p>{state}</p>
      <button onClick={handleChange}>İsmi Değiştir!</button>
      {/* <Products /> */}
    </div>
  );
}

export default App;
