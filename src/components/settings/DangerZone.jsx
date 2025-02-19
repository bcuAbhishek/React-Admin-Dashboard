import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const DangerZone = () => {
	return (
		<motion.div
			className='bg-red-50 shadow-md rounded-xl p-6 border border-red-200 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className='flex items-center mb-4'>
				<Trash2 className='text-red-600 mr-3' size={24} />
				<h2 className='text-xl font-semibold text-gray-900'>Danger Zone</h2>
			</div>
			<p className='text-gray-600 mb-4'>Permanently delete your account and all of your content.</p>
			<button
				className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
      transition duration-200'
			>
				Delete Account
			</button>
		</motion.div>
	);
};
export default DangerZone;
