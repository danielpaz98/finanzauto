// UTILS
import { cn } from "~/utils";

interface Props {
	children?: React.ReactNode;
	className?: string;
}

export default function ActionModalFooter({ children, className }: Props) {
	const classNames = cn("flex items-center p-4 border-t border-gray-200 rounded-b md:p-5", className);

	return <footer className={classNames}>{children}</footer>;
}
