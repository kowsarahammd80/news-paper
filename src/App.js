
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routers/Router';

function App() {
  return (
    <div className="mx-9 lg:mx-20 xl:mx-20 xxl:mx-20 md:mx-16">
      <RouterProvider router={routers}>

      </RouterProvider>
    </div>
  );
}

export default App;
