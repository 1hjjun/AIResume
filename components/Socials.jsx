'use client';
import {
	RiLinkedinFill,
	RiGithubFill,
	RiPenNibFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
	{
		path: 'https://www.linkedin.com/in/hyungjun-han-aa46b32a8/',
		name: <RiLinkedinFill />,
	},
	{
		path: 'https://github.com/1hjjun',
		name: <RiGithubFill />,
	},
	{
		path: 'https://velog.io/@aut7410/posts',
		name: <RiPenNibFill />,
	},
];

const Socials = ({containerStyles, iconsStyles}) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon,index)=>{
				return (
				<Link href={icon.path} target="_blank" key={index}>
					<div className={`${iconsStyles}`}>{icon.name}</div> 
				</Link>
				);
			})}
		</div>
	);
};

export default Socials
