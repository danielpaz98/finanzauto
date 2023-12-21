// UTILS
import { cn } from "~/utils";

type Props = ({ tag: "th" } & React.ComponentProps<"th">) | ({ tag: "td" } & React.ComponentProps<"td">);

export default function TableHeadCell({ children, className, tag: Tag = "td", ...restProps }: Props) {
	const classNames = cn("px-6 py-3", className);

	return (
		<Tag className={classNames} {...restProps}>
			{children}
		</Tag>
	);
}
