import './App.css';
// import Home from './pages/index';
import { GlobalContext } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  const user = {
    username: 'Ardivan',
  };

  return (
    <section id="center">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </section>
  );
}

export default App;

// Context, Zuztand, Redux ( Global State )
