import { forwardRef } from "react";
// PLUGINS
import { useFormContext } from "react-hook-form";
// COMPONENTS
import { FeedbackMessage, Select } from "~/components";
// TYPES
import type { FeedbackType } from "~/components/FeedbackMessage";
import type { Props as SelectProps } from "~/components/Select";

export interface Props extends SelectProps {
	feedbackType: FeedbackType;
}

const FormSelect = forwardRef(
	({ className, disabled, name, feedbackType, children, ...restProps }: Props, ref?: React.Ref<HTMLSelectElement>) => {
		const {
			register,
			formState: { isSubmitting, errors },
		} = useFormContext();

		return (
			<div className={className}>
				<Select {...restProps} ref={ref} disabled={isSubmitting || disabled} {...(name && { ...register(name) })}>
					{children}
				</Select>

				{errors?.[name as string] && (
					<FeedbackMessage feedbackType={feedbackType} text={errors?.[name as string]?.message as string} />
				)}
			</div>
		);
	},
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
