type Props = React.ComponentProps<"tr">;

export default function TableHeadRow({ children, className, ...restProps }: Props) {
	return (
		<tr className={className} {...restProps}>
			{children}
		</tr>
	);
}
