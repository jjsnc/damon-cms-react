import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        hello world
        <Home></Home>
     </div>
    </Provider>
  );
}

export default App;
