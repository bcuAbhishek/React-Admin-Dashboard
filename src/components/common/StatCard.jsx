import { motion } from "framer-motion";

const StatCard = ({ name, value, icon: Icon, color, className = '' }) => {
	return (
		<div className={`bg-white rounded-xl p-6 border border-gray-200 shadow-md ${className}`}>
			<div className='flex items-center justify-between'>
				<h3 className='text-sm font-medium text-gray-600'>{name}</h3>
				<Icon style={{ color }} className='w-5 h-5' />
			</div>
			<p className='mt-2 text-3xl font-semibold text-gray-900'>{value}</p>
		</div>
	);
};
export default StatCard;
