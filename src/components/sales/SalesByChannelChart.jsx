import { motion } from 'framer-motion';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const channelData = [
    { name: 'Direct', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Email', value: 200 },
    { name: 'Referral', value: 100 },
];

const SalesByChannelChart = () => {
    return (
        <motion.div
            className='bg-white shadow-md rounded-xl p-6 border border-gray-200'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Sales by Channel
            </h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={channelData}
                            cx='50%'
                            cy='50%'
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                        >
                            {channelData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                borderColor: '#E5E7EB',
                            }}
                            itemStyle={{ color: '#111827' }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SalesByChannelChart;
