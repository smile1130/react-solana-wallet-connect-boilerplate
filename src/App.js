import "./assets/scss/style.css"
import Router from './routes';
//style

import { Wallets } from './components/wallet';

export default function App() {
  return (
    <Wallets>
      <Router />
    </Wallets>
  );
}
