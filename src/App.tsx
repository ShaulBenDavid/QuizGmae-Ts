import {Fragment} from 'react';
// Components
import Home from './Components/Home/Home';
// Styles
import { GlobalStyle } from './App.style';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
