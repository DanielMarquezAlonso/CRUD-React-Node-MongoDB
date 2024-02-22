import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ClientsPage } from './pages/ClientsPage'
import { ClientFormPage } from './pages/ClientFormPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/clients" />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients-create" element={<ClientFormPage />} />
          <Route path="/clients/:id" element={<ClientsPage />} />
          <Route path="/clients-create/:id" element={<ClientFormPage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App;
