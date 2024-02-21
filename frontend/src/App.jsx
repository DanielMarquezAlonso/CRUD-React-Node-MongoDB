import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ClientsPage } from './pages/ClientsPage'
import { ClientFormPage } from './pages/ClientFormPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/clients" />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients-create" element={<ClientFormPage />} />
        <Route path="/clients/:id" element={<ClientFormPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
