// UTILS
import { cn } from "~/utils";
// ICONS
import { ReactComponent as GridIcon } from "~/assets/icons/grid.svg";

interface Props {
	className?: string;
}

const DropdownUserMenu = ({ className }: Props) => {
	const classNames = cn("relative", className);

	return (
		<div className={classNames}>
			<div className="flex items-center gap-3 cursor-pointer">
				<i>
					<GridIcon fill="#fefefe" height={28} width={28} />
				</i>

				<picture className="block w-10 h-10 rounded-full">
					<img
						alt="Profile Avatar"
						className="object-contain rounded-[inherit]"
						src="https://api.dicebear.com/7.x/avataaars/svg?seed=Max&backgroundColor=0098b1"
					/>
				</picture>
			</div>
		</div>
	);
};

export default DropdownUserMenu;
