import './App.css';
import { Inicio } from './pages/Inicio';
import { Nosotros } from './pages/Nosotros';
import { Servicios } from './pages/Servicios';
import { Contacto } from './pages/Contacto';
import { Unete } from './pages/Unete';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Equipo } from './pages/Equipo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/unete",
    element: <Unete />,
  },
  {
    path: "/nosotros/equipo",
    element: <Equipo />
  }
]);

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
