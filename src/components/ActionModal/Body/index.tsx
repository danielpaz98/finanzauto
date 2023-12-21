// UTILS
import { cn } from "~/utils";

interface Props {
	children?: React.ReactNode;
	className?: string;
}

export default function ActionModalBody({ children, className }: Props) {
	const classNames = cn("p-4 space-y-4 border-t border-gray-200 md:p-5", className);

	return <div className={classNames}>{children}</div>;
}
