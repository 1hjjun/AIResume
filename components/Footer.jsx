import Socials from "./Socials"


const Footer = () => {
	return (
		<footer className="bg-secondary py-6">
			<div className="contatiner mx-auto">
				<div className="flex flex-col items-center justify-between">
					{/* socials */}
					<Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" iconsStyles="text-primary text-[20px] hover:text-black" />
					{/* copyright */}
					<div className="text-mute-foreground">
						Copyright &copy; HyungJun Han. All rights reserved.
					</div>
				</div>
			</div>

		</footer>
	)
}

export default Footer
