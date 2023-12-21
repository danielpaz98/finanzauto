type Props = React.ComponentProps<"tbody">;

export default function TableBody({ children, className, ...restProps }: Props) {
	return (
		<tbody className={className} {...restProps}>
			{children}
		</tbody>
	);
}
