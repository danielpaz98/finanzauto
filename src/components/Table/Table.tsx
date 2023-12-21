// UTILS
import { cn } from "~/utils";

type Props = React.ComponentProps<"table">;

export default function Table({ children, className, ...restProps }: Props) {
	const classNames = cn("w-full text-sm text-left text-gray-500 border", className);

	return (
		<table className={classNames} {...restProps}>
			{children}
		</table>
	);
}
