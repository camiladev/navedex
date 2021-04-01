
import './App.css';
import Routes from '../src/routes'
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return ( 
    <AuthProvider>
      <Routes /> 

    </AuthProvider>
  )
}

export default App;
