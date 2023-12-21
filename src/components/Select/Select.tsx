import { forwardRef } from "react";
// UTILS
import { cn } from "~/utils";

export interface Props extends React.ComponentProps<"select"> {
	label?: string;
}

const Select = forwardRef(
	({ className, label, name, children, onChange, ...restProps }: Props, ref?: React.Ref<HTMLSelectElement>) => {
		const classNames = cn("flex flex-col text-gray-500", className);

		return (
			<div className={classNames}>
				{label && (
					<label className="text-[15px]" htmlFor={name}>
						{label}
					</label>
				)}

				<select
					{...restProps}
					ref={ref}
					className="block w-full p-3 text-sm border border-gray-300 rounded outline-none bg-gray-50 focus:ring-blue-300 focus:border-blue-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
					id={name}
					name={name}
					onChange={onChange}
				>
					{children}
				</select>
			</div>
		);
	},
);

Select.displayName = "Select";

export default Select;
