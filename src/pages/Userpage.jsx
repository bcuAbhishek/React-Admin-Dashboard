import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react';
import UserGrowthChart from '../components/users/UserGrowthChart';
import UserActivityHeatmap from '../components/users/UserActivityHeatmap';
import UserDemographicsChart from '../components/users/UserDemographicsChart';
import UsersTable from '../components/users/UsersTable';

const Userpage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Users' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 '>
                {/* STATS */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard
                        name='Total Users'
                        icon={UsersIcon}
                        value={'3253'}
                        color='#6366F1'
                    />
                    <StatCard
                        name='New Users Today'
                        icon={UserPlus}
                        value={'89'}
                        color='#10B981'
                    />
                    <StatCard
                        name='Active Users'
                        icon={UserCheck}
                        value={'23'}
                        color='#F59E0B'
                    />
                    <StatCard
                        name='Churn Rate'
                        icon={UserX}
                        value={'2.5%'}
                        color='#EF4444'
                    />
                </motion.div>
            </main>
            <div className='px-8 mb-8 '>
                <UsersTable />
            </div>
            {/* Charts */}

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-8'>
                <UserGrowthChart />
                <UserActivityHeatmap />
                <UserDemographicsChart />
            </div>
        </div>
    );
};
export default Userpage;
