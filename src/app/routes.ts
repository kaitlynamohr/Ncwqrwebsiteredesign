import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Monitoring } from './pages/Monitoring';
import { Research } from './pages/Research';
import { Publications } from './pages/Publications';
import { WaterTesting } from './pages/WaterTesting';
import { GetInvolved } from './pages/GetInvolved';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { NewsArticle } from './pages/NewsArticle';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'monitoring', Component: Monitoring },
      { path: 'research', Component: Research },
      { path: 'publications', Component: Publications },
      { path: 'water-testing', Component: WaterTesting },
      { path: 'get-involved', Component: GetInvolved },
      { path: 'news', Component: News },
      { path: 'news/:id', Component: NewsArticle },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
