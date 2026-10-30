import '@/app/ui/global.css';
import { inter, saira, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${saira.className} antialiased`}>{children}</body>
		</html>
	);
}
