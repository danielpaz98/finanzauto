type Props = React.ComponentProps<"option">;

export default function SelectOption({ children, ...restProps }: Props) {
	return <option {...restProps}>{children}</option>;
}
