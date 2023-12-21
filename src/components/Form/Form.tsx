import { forwardRef } from "react";

type Props = React.ComponentProps<"form">;

function Form({ className, children, ...restProps }: Props, ref?: React.Ref<HTMLFormElement>) {
	return (
		<form ref={ref} autoComplete="off" className={className} {...restProps}>
			{children}
		</form>
	);
}

const FormWithRef = forwardRef(Form);

export default FormWithRef;
