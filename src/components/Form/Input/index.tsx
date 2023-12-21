import { forwardRef } from "react";
// PLUGINS
import { useFormContext } from "react-hook-form";
// COMPONENTS
import { FeedbackMessage, Input } from "~/components";
// TYPES
import type { FeedbackType } from "~/components/FeedbackMessage";
import type { Props as InputProps } from "~/components/Input";

export interface Props extends InputProps {
	feedbackType: FeedbackType;
}

const FormInput = forwardRef(
	({ className, disabled, name, feedbackType, ...restProps }: Props, ref?: React.Ref<HTMLInputElement>) => {
		const {
			register,
			formState: { isSubmitting, errors },
		} = useFormContext();

		return (
			<div className={className}>
				<Input {...restProps} ref={ref} disabled={isSubmitting || disabled} {...(name && { ...register(name) })} />

				{errors?.[name as string] && (
					<FeedbackMessage feedbackType={feedbackType} text={errors?.[name as string]?.message as string} />
				)}
			</div>
		);
	},
);

FormInput.displayName = "FormInput";

export default FormInput;
