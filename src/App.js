import React from 'react';
import './App.css'; // Jika Anda memiliki file CSS untuk styling
import { Counter, Header, Button } from './components';  

function App() {
  const handleButtonClick = () => {
    alert('Tombol ditekan!');
  };
  return (
    <div className="App">
      <Header title="Aplikasi Saya" />
      <Counter />
      <Button label="Klik Saya" onClick={handleButtonClick} />
    </div>
  );
}

export default App;

