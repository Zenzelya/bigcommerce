import PageManager from '../page-manager';
import React from 'react';
import { createRoot } from 'react-dom/client';
import OrderProvider, { OrderContext } from './components/OrderProvider';
import App from './components/App';

export default class OrderStatus extends PageManager {
    onReady() {
        const root = createRoot(document.getElementById('react-app'));
        root.render(<OrderProvider>
            <App />
        </OrderProvider>);
    }
}
