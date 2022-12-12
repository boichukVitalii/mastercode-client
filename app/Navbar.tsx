import { FC } from 'react';
import Link from 'next/link';

type TLinks = { name: string, path: string; }[];

const links: TLinks = [
	{ name: 'Problems', path: '/problems' },
	{ name: 'About', path: '/about' },
];

const Navbar: FC = () => {
	return (
		<header className='bg-nav-blue h-14 w-full'>
			<nav className='container mx-auto flex text-slate-300 justify-between h-full items-center'>
				<div className='flex'>
					<div className='mr-16 font-semibold text-white'><Link href='/'>Mastercode</Link></div>
					<ul className='flex'>
						{
							links.map((link) => (
								<li key={link.name} className='mr-4 hover:text-white'><Link href={link.path}>{link.name}</Link></li>
							))
						}
					</ul>
				</div>
				<div className='hidden'>Profile</div>
			</nav>
		</header>
	);
};

export default Navbar;