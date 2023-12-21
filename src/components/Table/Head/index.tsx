// UTILS
import { cn } from "~/utils";

type Props = React.ComponentProps<"thead">;

export default function TableHead({ children, className, ...restProps }: Props) {
	const classNames = cn("text-xs text-white uppercase bg-teal-800", className);

	return (
		<thead className={classNames} {...restProps}>
			{children}
		</thead>
	);
}
