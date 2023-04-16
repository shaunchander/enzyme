import Image from "next/image";
import { LazyMotion, domAnimation, m, useMotionValue } from "framer-motion";
import { useState, useMemo, useEffect, useCallback } from "react";
import { z } from "zod";

enum STATUS {
	IDLE,
	ERROR,
	SUCCESS,
	INVALID_EMAIL,
}

export default function Home() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<STATUS>(STATUS.IDLE);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const emailSchema = useMemo(() => {
		return z.string().email();
	}, []);

	const handleMouseMove = useCallback(
		(e: MouseEvent<HTMLDivElement, MouseEvent>) => {
			const rect = e.currentTarget.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			mouseX.set(x);
			mouseY.set(y);
		},
		[]
	);

	return (
		<LazyMotion features={domAnimation}>
			<m.main
				initial="initial"
				animate="animate"
				className="h-screen bg-charcoal text-cream relative px-4 pt-4 flex flex-col overflow-hidden justify-end font-switzer"
			>
				<m.div
					variants={{
						initial: {
							opacity: 0,
						},
						animate: {
							opacity: 1,
							transition: {
								delay: 0.5,
								duration: 2,
							},
						},
					}}
					className="absolute inset-0 pointer-events-none"
				>
					<Image src="/img/bg.png" fill alt="" />
				</m.div>

				<div
					className="xl:max-w-[1236px] md:w-11/12 mx-auto rounded-t-2xl relative overflow-hidden md:h-2/3 border-t border-x border-cream/5 lg:border-none"
					onMouseMove={handleMouseMove}
				>
					<m.div
						className="hidden lg:block lg:pointer-events-none lg:absolute lg:w-64 lg:h-64 lg:bg-cream/60 blur-2xl lg:rounded-full lg:left-[-128px] lg:top-[-128px]"
						style={{
							x: mouseX,
							y: mouseY,
						}}
					></m.div>
					<div className="flex flex-col bg-charcoal/60 backdrop-blur-lg md:py-16 p-6 h-full relative z-10 lg:m-[1px] rounded-t-2xl overflow-hidden lg:border lg:border-cream/5">
						<m.div
							className="hidden lg:block lg:pointer-events-none lg:absolute lg:w-64 lg:h-64 lg:bg-cream/20 mix-blend-soft-light blur-2xl lg:rounded-full lg:left-[-128px] lg:top-[-128px]"
							style={{
								x: mouseX,
								y: mouseY,
							}}
						></m.div>
						<div className="space-y-16 flex-1">
							<div className="text-center space-y-7">
								<div className="space-y-2">
									<h1 className="text-6xl text-cream font-black font-plein">
										Enzyme<span className="text-glee">.</span>
									</h1>
									<p className="text-2xl font-black font-plein">
										Your catalyst for better studying.
									</p>
								</div>
								<div className="max-w-[520px] mx-auto">
									<p className="md:text-lg font-medium text-gravel">
										We’re building the next-generation flashcards app. Designed
										specifically for premed and med students.
									</p>
								</div>
							</div>
							<div>
								<form
									onSubmit={async (e) => {
										e.preventDefault();
										try {
											emailSchema.parse(email);
										} catch (err) {
											setStatus(STATUS.INVALID_EMAIL);
											return;
										}

										try {
											const res = await fetch("/api/subscribe", {
												method: "POST",
												body: JSON.stringify({ email }),
												headers: {
													"Content-Type": "application/json",
												},
											});

											if (!res.ok) {
												setStatus(STATUS.ERROR);
											} else {
												setStatus(STATUS.SUCCESS);
											}
										} catch (err) {
											console.log(err);
											setStatus(STATUS.ERROR);
										} finally {
											setEmail("");
										}
									}}
									className="max-w-[384px] mx-auto space-y-6"
								>
									<div>
										<input
											type="text"
											placeholder="Your email..."
											className="text-lg font-medium text-cream placeholder:text-gravel w-full p-6 block rounded-lg bg-charcoal/20 border border-cream/20"
											onChange={(e) => setEmail(e.target.value)}
											value={email}
										/>
										{status === STATUS.INVALID_EMAIL && (
											<p className="text-xs text-red-400 mt-2">
												Please enter a valid email address.
											</p>
										)}
										{status === STATUS.ERROR && (
											<p className="text-xs text-red-400 mt-2">
												An error occured when subscribing. Please refresh the
												page and try again.
											</p>
										)}
									</div>

									<button
										type="submit"
										className="text-sm font-semibold text-gravel hover:text-cream transition duration-300 ease-in-out p-3 block rounded-lg bg-charcoal/20 border border-cream/20 w-full relative"
									>
										<span>Join the waitlist</span>
										<div className="absolute inset-0 p-3 flex justify-end items-center pointer-events-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="none"
												viewBox="0 0 16 16"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M6 6.667L2.667 10 6 13.333"
												></path>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M13.333 2.667v4.666A2.667 2.667 0 0110.667 10h-8"
												></path>
											</svg>
										</div>
									</button>
								</form>
							</div>
						</div>
						<div className="flex justify-center mt-10">
							<a
								href="https://twitter.com/shaunchander"
								className="text-sm font-semibold flex items-center space-x-2 hover:text-glee transition duration-300 ease-in-out"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="none"
									viewBox="0 0 16 16"
								>
									<g clipPath="url(#clip0_37_4)">
										<path
											stroke="#FACC15"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15.333 2a7.266 7.266 0 01-2.093 1.02 2.987 2.987 0 00-5.24 2v.667a7.107 7.107 0 01-6-3.02s-2.667 6 3.333 8.666a7.76 7.76 0 01-4.666 1.334C6.667 16 14 12.667 14 5c0-.186-.018-.37-.053-.553A5.146 5.146 0 0015.333 2z"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_37_4">
											<path fill="#fff" d="M0 0H16V16H0z"></path>
										</clipPath>
									</defs>
								</svg>
								<span>Follow us on Twitter for product updates.</span>
							</a>
						</div>
					</div>
				</div>
			</m.main>
		</LazyMotion>
	);
}
