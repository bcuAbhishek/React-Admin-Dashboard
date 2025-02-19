import { Route, Routes } from 'react-router-dom';

import Sidebar from './components/common/Sidebar';

import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import SalesPage from './pages/SalesPage';
import OrdersPage from './pages/OrdersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import Userpage from './pages/Userpage';

function App() {
    return (
        <div className='flex h-screen bg-gray-50 text-gray-900 overflow-hidden'>
            {/* BG */}
            <div className='fixed inset-0 z-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80' />
            </div>

            <Sidebar />
            <Routes>
                <Route path='/' element={<OverviewPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/users' element={<Userpage />} />
                <Route path='/sales' element={<SalesPage />} />
                <Route path='/orders' element={<OrdersPage />} />
                <Route path='/analytics' element={<AnalyticsPage />} />
                <Route path='/settings' element={<SettingsPage />} />
            </Routes>
        </div>
    );
}

export default App;
