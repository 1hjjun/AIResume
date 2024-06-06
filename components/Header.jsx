'use client';
import React from "react";

// components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className="py-5 bg-[#F7FBF2] dark:bg-[#001500]">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<Logo />
					<div className="flex items-center gap-x-6">
						{/* nav */}
						<Nav 
							containerStyles="hidden xl:flex gap-x-8 items-center"
							linkStyles="relative hover:text-primary transition-all"
						/>
						<ThemeToggler />
						{/* mobileNav */}
						<div className="xl:hidden">
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
