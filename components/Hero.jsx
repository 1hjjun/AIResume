import Image from "next/image"
import Socials from "./Socials"

const Hero = () => {
	return (
		<section className="py-12 xl:py-12 h-[84vh] xl:pt-20 ">
			<div className="container mx-auto">
				<div className="flex justify-between gap-x-6">
					{/* text */}
					<div className="flex max-w-[750px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
						<div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Cloud Security Expert</div>
						<h1 className="h1">안녕하세요,</h1><br /> 
						<h1 className="h1" >클라우드 보안 전문가 한형준입니다.</h1>
						<p className="subtitle">AI 챗봇을 이용한 이력서 웹 페이지입니다. 제 이력서를 기반으로 AI Assistant가 대답을 해드립니다.</p>
						{/* socials */}
						<Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[30px] hover:text-primary transition-all' />
					</div>
					{/* image */}
					<div className="hidden xl:flex relative">
						<Image src="/profile.jpg" width={380} height={380} priority alt=''></Image>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
