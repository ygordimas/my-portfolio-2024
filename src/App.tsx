import './App.css';
import { Outlet } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
