import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
export default function Home() {
	return (
		<LazyMotion features={domAnimation}>
			<main className="h-screen bg-charcoal text-cream relative px-4 pt-4 flex flex-col overflow-hidden justify-end font-switzer">
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
					initial={"initial"}
					animate={"animate"}
					className="absolute inset-0 pointer-events-none"
				>
					<Image src="/img/bg.png" fill alt="" />
				</m.div>

				<div className="xl:max-w-[1236px] xl:w-full md:w-11/12 mx-auto py-16 px-6 rounded-t-2xl border-cream/10 border-r border-l border-t bg-charcoal/60 relative overflow-hidden w-full backdrop-blur-xl">
					<div className="absolute inset-0 bg-gradient-to-br from-cream/10 from-0% to-50%  to-transparent pointer-events-none"></div>
					<div className="space-y-16">
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
								<p className="text-lg font-medium text-gravel">
									We’re building the next-generation flashcards app. Designed
									specifically for premed and med students.
								</p>
							</div>
						</div>
						<div>
							<form action="" className="max-w-[384px] mx-auto space-y-6">
								<input
									type="email"
									placeholder="Your email..."
									className="text-lg font-medium text-cream placeholder:text-gravel w-full p-6 block rounded-lg bg-charcoal/20 border border-cream/20"
								/>
								<button
									type="submit"
									className="text-sm font-semibold text-gravel p-3 block rounded-lg bg-charcoal/20 border border-cream/20 w-full relative"
								>
									<span>Join the waitlist</span>
									<div className="absolute inset-0 p-3 flex justify-end items-center pointer-events-none">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="absolute right-3"
										>
											<path
												d="M6.00002 6.66669L2.66669 10L6.00002 13.3334"
												stroke="currentColor"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M13.3334 2.66669V7.33335C13.3334 8.0406 13.0524 8.71888 12.5523 9.21897C12.0522 9.71907 11.3739 10 10.6667 10H2.66669"
												stroke="#D6D3D1"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
		</LazyMotion>
	);
}
