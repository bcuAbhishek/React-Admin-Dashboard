import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesTrendChart from '../components/products/SalesTrendChart';
import ProductsTable from '../components/products/ProductsTable';

const ProductsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Products' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* STATS */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard
                        name='Total Products'
                        icon={Package}
                        value='3253'
                        color='#4F46E5'
                        className='bg-white shadow-md'
                    />
                    <StatCard
                        name='Top Selling'
                        icon={TrendingUp}
                        value='89'
                        color='#8B5CF6'
                        className='bg-white shadow-md'
                    />
                    <StatCard
                        name='Low Stock'
                        icon={AlertTriangle}
                        value='23'
                        color='#EC4899'
                        className='bg-white shadow-md'
                    />
                    <StatCard
                        name='Total Revenue'
                        icon={DollarSign}
                        value='$324,532'
                        color='#10B981'
                        className='bg-white shadow-md'
                    />
                </motion.div>

                <div className='px-8 mb-8'>
                    <div className='bg-white rounded-xl shadow-md p-6 border border-gray-200'>
                        <ProductsTable />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-8'>
                    <SalesTrendChart />
                    <CategoryDistributionChart />
                </div>
            </main>
        </div>
    );
};
export default ProductsPage;
