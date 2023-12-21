// UTILS
import { cn } from "~/utils";
// ICONS
import { ReactComponent as XMarkIcon } from "~/icons/xmark.svg";

interface Props {
	children?: React.ReactNode;
	className?: string;
	title?: string;
	onClose?: () => void;
}

export default function ActionModalHeader({ children, className, title, onClose }: Props) {
	const classNames = cn("flex items-center justify-between gap-2 p-4 text-gray-700 rounded-t md:p-5", className);

	return (
		<header className={classNames}>
			{children ? (
				children
			) : (
				<>
					<h2 className="w-full font-bold">{title}</h2>
					<button
						className="justify-center text-sm text-gray-400 bg-transparent rounded-lg"
						type="button"
						onClick={onClose}
					>
						<XMarkIcon fill="currentColor" height={24} width={24} />
						<span className="sr-only">Close modal</span>
					</button>
				</>
			)}
		</header>
	);
}
