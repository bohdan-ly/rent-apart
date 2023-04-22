import { createRoot } from 'react-dom/client';
import { App } from './app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './index.scss';

const container = document.getElementById('root');
container && createRoot(container).render(<App />);
