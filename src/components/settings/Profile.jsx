import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='space-y-6'>
				<div className='flex items-center gap-4'>
					<div className='size-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-semibold'>
						AS
					</div>
					<div>
						<h3 className='text-lg font-medium text-gray-900'>Abhishek Shrestha</h3>
						<p className='text-gray-600'>learnobusek@gmail.com</p>
					</div>
				</div>

				<div className='grid gap-4'>
					<div>
						<label className='block text-sm font-medium text-gray-600 mb-1'>Full Name</label>
						<input
							type='text'
							value='Abhishek Shrestha'
							className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium text-gray-600 mb-1'>Email</label>
						<input
							type='email'
							value='learnobusek@gmail.com'
							className='w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
						/>
					</div>
				</div>

				<div>
					<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200'>
						Save Changes
					</button>
				</div>
			</div>
		</SettingSection>
	);
};

export default Profile;
