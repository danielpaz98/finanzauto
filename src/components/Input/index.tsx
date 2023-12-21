import { forwardRef } from "react";
// UTILS
import { cn } from "~/utils";

export interface Props extends React.ComponentProps<"input"> {
	label?: string;
}

const Input = forwardRef(({ className, label, name, ...restProps }: Props, ref?: React.Ref<HTMLInputElement>) => {
	const classNames = cn("flex flex-col text-gray-500", className);

	return (
		<div className={classNames}>
			{label && (
				<label className="text-[15px]" htmlFor={name}>
					{label}
				</label>
			)}

			<input
				{...restProps}
				ref={ref}
				className="w-full p-2 border rounded shadow outline-none focus:ring-blue-300 focus:border-blue-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
				id={name}
				name={name}
			/>
		</div>
	);
});

Input.displayName = "Input";

export default Input;
