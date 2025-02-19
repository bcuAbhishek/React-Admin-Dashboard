import { motion } from 'framer-motion';

const SettingSection = ({ icon: Icon, title, children }) => {
    return (
        <div className='bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-8'>
            <div className='flex items-center mb-4'>
                <Icon className='text-gray-600 mr-3' size={24} />
                <h2 className='text-xl font-semibold text-gray-900'>{title}</h2>
            </div>
            {children}
        </div>
    );
};
export default SettingSection;
