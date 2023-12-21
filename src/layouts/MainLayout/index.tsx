// COMPONENTS
import { Navbar } from "~/components";

interface Props {
	children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
	return (
		<div className="main-container">
			<Navbar />
			<main className="p-6 overflow-y-auto hover-scrollbar">{children}</main>
		</div>
	);
}
