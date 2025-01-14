import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import Gallery from './pages/Gallery.tsx';
import { GalleryProvider } from './services/GalleryContext.tsx';
import Contact from './pages/ContactPage/Contact.tsx';
import Home from './pages/Home.tsx';
import Layout from './pages/Layout.tsx';
import ArtworkPage from './pages/ArtworkPage/index.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'gallery/:galleryId',
        element: <Gallery />,
      },
      {
        path: 'gallery/:galleryId/:title',
        element: <ArtworkPage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GalleryProvider>
      <RouterProvider router={router} />
    </GalleryProvider>
  </StrictMode>
);
