import React from 'react';
// import 'antd/dist/antd.css';
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </div>
  );
}

export default App;
