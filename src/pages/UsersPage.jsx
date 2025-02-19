const UsersPage = () => {
    return (
        <div className='flex-1 relative z-10 overflow-auto bg-gray-50'>
            <Header title={"Users"} />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard 
                        name='Total Users' 
                        icon={Users} 
                        value={userStats.totalUsers} 
                        color='#6366F1'
                        className='bg-white shadow-md'
                    />
                    <StatCard 
                        name='Active Users' 
                        icon={UserCheck} 
                        value={userStats.activeUsers} 
                        color='#10B981'
                        className='bg-white shadow-md'
                    />
                    <StatCard 
                        name='New Users' 
                        icon={UserPlus} 
                        value={userStats.newUsers} 
                        color='#F59E0B'
                        className='bg-white shadow-md'
                    />
                    <StatCard 
                        name='Conversion Rate' 
                        icon={Percent} 
                        value={userStats.conversionRate} 
                        color='#EF4444'
                        className='bg-white shadow-md'
                    />
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <UserGrowthChart />
                    <UserActivityHeatmap />
                </div>

                <UserDemographicsChart />
                <UsersTable />
            </main>
        </div>
    );
}; 