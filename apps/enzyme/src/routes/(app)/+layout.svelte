<script lang="ts">
	import '@styles/plein.css';
	import '@styles/switzer.css';
	import '@styles/tailwind.css';

	import { HomeIcon, FolderIcon, SettingsIcon } from 'svelte-feather-icons';
	import SafeArea from '@components/SafeArea.svelte';

	import { page } from '$app/stores';
	import { cn } from 'nano-classnames';
</script>

<div class="flex flex-col md:flex-row h-full">
	<div id="app" class="overflow-auto relative z-10 md:order-last flex-1 flex flex-col">
		<slot />
	</div>
	<div
		id="menu"
		class="p-4 bg-ash border-t border-cream/10 relative z-20 md:order-first md:border-t-0 md:py-6 md:border-r md:border-r-cream/10"
	>
		<div
			class="bg-gradient-to-t from-charcoal to-transparent h-12 absolute inset-x-0 top-0 transform -translate-y-full pointer-events-none md:hidden border-b border-b-cream/10"
		/>

		<div class="md:flex md:justify-between md:flex-col md:h-full">
			<div class="hidden md:flex md:justify-center md:items-center">
				<svg
					width="30"
					height="27"
					viewBox="0 0 30 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.5011 10.52V16.28H4.40509V10.52H16.5011ZM17.9411 0.799998V6.92H4.40509V0.799998H17.9411ZM17.9411 19.88V26H4.40509V19.88H17.9411ZM7.35709 26H0.157094V0.799998H7.35709V26Z"
						fill="#F5F5F4"
					/>
					<path
						d="M24.8801 26.36C23.6321 26.36 22.6241 26.012 21.8561 25.316C21.1121 24.596 20.7401 23.624 20.7401 22.4C20.7401 21.176 21.1121 20.216 21.8561 19.52C22.6241 18.8 23.6321 18.44 24.8801 18.44C26.1281 18.44 27.1241 18.8 27.8681 19.52C28.6361 20.216 29.0201 21.176 29.0201 22.4C29.0201 23.624 28.6361 24.596 27.8681 25.316C27.1241 26.012 26.1281 26.36 24.8801 26.36Z"
						fill="#FACC15"
					/>
				</svg>
			</div>
			<ul
				class="flex justify-evenly items-center md:flex-col md:gap-y-8 md:justify-center md:h-full"
			>
				<li>
					<a
						href="/"
						class={cn(
							'flex flex-col justify-center items-center space-y-1 hover:text-glee duration-300 ease-in-out transition',
							[$page.url.pathname === '/', 'text-glee', 'text-gravel']
						)}
					>
						<HomeIcon size="20" />
						<p class="tiny md:sr-only">Home</p>
					</a>
				</li>
				<li>
					<a
						href="folders"
						class={cn(
							'flex flex-col justify-center items-center space-y-1 hover:text-glee duration-300 ease-in-out transition',
							[$page.url.pathname === '/folders', 'text-glee', 'text-gravel']
						)}
					>
						<FolderIcon size="20" />
						<p class="tiny md:sr-only">Your Folders</p>
					</a>
				</li>
				<li>
					<a
						href="/settings"
						class={cn(
							'flex flex-col justify-center items-center space-y-1 hover:text-glee duration-300 ease-in-out transition',
							[$page.url.pathname === '/settings', 'text-glee', 'text-gravel']
						)}
					>
						<SettingsIcon size="20" />
						<p class="tiny md:sr-only">Settings</p>
					</a>
				</li>
			</ul>
			<!-- <div class="hidden md:block">
				<img src="/pfp.png" alt="" />
			</div> -->
		</div>
	</div>
	<img
		class="absolute inset-0 w-full h-full object-cover pointer-events-none"
		src="/bg.png"
		alt=""
	/>
</div>
