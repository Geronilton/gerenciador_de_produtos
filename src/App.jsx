import './App.css';
import {AppRouter} from './routes/index'
import { AuthProvider } from './context/auth';

 function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;