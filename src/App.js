import Header from '../src/components/Header';

import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <div className='App'>
        <div className='Header'>
          <Header />
        </div>
        <Outlet />

      </div>

    </div>

  );

}

export default App;
