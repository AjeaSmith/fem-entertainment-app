import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
	title: "Home | Entertainment App",
	description: "Preview, search, and bookmark all your favorite shows",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${outfit.className} layout__wrapper full-container`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
