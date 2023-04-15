import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
export default function Home() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("");

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

				<div className="xl:max-w-[1236px] xl:w-full md:w-11/12 mx-auto md:py-16 p-6 rounded-t-2xl border-cream/10 border-r border-l border-t bg-charcoal/60 relative overflow-hidden w-full backdrop-blur-xl md:h-4/6 flex flex-col">
					<div className="absolute inset-0 bg-gradient-to-br from-cream/10 from-0% to-50%  to-transparent pointer-events-none"></div>
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
								<p className="text-lg font-medium text-gravel">
									We’re building the next-generation flashcards app. Designed
									specifically for premed and med students.
								</p>
							</div>
						</div>
						<div>
							<form
								onSubmit={async (e) => {
									e.preventDefault();

									if (!email) {
										setStatus("error");
									}

									try {
										const res = await fetch("/api/subscribe", {
											method: "POST",
											body: JSON.stringify(email),
											headers: {
												"Content-Type": "application/json",
											},
										});
									} catch (err) {
										console.log(err);
									}
								}}
								className="max-w-[384px] mx-auto space-y-6"
							>
								<input
									type="email"
									placeholder="Your email..."
									className="text-lg font-medium text-cream placeholder:text-gravel w-full p-6 block rounded-lg bg-charcoal/20 border border-cream/20"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
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
					<div className="flex justify-center mt-10">
						<a
							href="https://twitter.com/shaunchander"
							className="text-sm font-semibold flex items-center space-x-2 hover:text-glee transition duration-300 ease-in-out"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_37_4)">
									<path
										d="M15.3333 1.99999C14.6949 2.45031 13.9881 2.79473 13.24 3.01999C12.8385 2.55833 12.3049 2.23112 11.7113 2.08261C11.1178 1.9341 10.493 1.97145 9.92138 2.18963C9.34977 2.4078 8.85895 2.79626 8.51531 3.30247C8.17167 3.80868 7.99179 4.40821 7.99999 5.01999V5.68666C6.82841 5.71704 5.66751 5.4572 4.62066 4.93029C3.57382 4.40338 2.67353 3.62575 1.99999 2.66666C1.99999 2.66666 -0.666677 8.66666 5.33332 11.3333C3.96034 12.2653 2.32476 12.7326 0.666656 12.6667C6.66666 16 14 12.6667 14 4.99999C13.9994 4.81429 13.9815 4.62905 13.9467 4.44666C14.6271 3.77565 15.1072 2.92847 15.3333 1.99999Z"
										stroke="#FACC15"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_37_4">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span>Follow us on Twitter for product updates</span>
						</a>
					</div>
				</div>
			</main>
		</LazyMotion>
	);
}
