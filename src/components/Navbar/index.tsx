// UTILS
import { cn } from "~/utils";
// COMPONENTS
import DropdownUserMenu from "./DropdownUserMenu";

interface Props {
	className?: string;
}

const Navbar = ({ className }: Props) => {
	const classNames = cn(
		"sticky top-0 z-10 flex justify-between items-center min-h-[60px] bg-teal-800 sm:py-4 sm:px-10 py-2 px-4",
		className,
	);

	return (
		<header className={classNames}>
			<h1 className="text-lg font-semibold">Módulo de Consulta y Registro de Usuarios al Sistema</h1>
			<nav className="flex justify-between">
				<ul className="flex items-center gap-[30px] mr-7">
					<li>
						<DropdownUserMenu />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
