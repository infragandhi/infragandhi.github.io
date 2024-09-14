import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './i18n';
import CV from './components/pdf/cv';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* <RouterProvider router={router} /> */}
		<CV/>
	</StrictMode>
);
