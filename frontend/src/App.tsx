import {
  RecoilRoot,
} from 'recoil';
import './App.css';

import Counter from './components/Counter';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Counter />
      </div>
    </RecoilRoot>
  )
}

export default App
