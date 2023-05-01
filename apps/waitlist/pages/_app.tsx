import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/switzer.css";
import "../styles/plein.css";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script
					async
					defer
					data-website-id="e589d0df-0dea-4500-acb8-c652ecf19a56"
					src="https://umami.services.shaunchander.me/umami.js"
				></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
