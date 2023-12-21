// UTILS
import { cn } from "~/utils";
// ICONS
import { ReactComponent as IconAlert } from "~/icons/icon-alert.svg";

export type FeedbackType = "success" | "warning" | "error";

export type Props = {
	className?: string;
	feedbackType: FeedbackType;
	text: string;
};

const FeedbackMessage = ({ className, feedbackType, text }: Props) => {
	const feedbackColor = { success: "text-success", warning: "text-warning", error: "text-error" };

	const classNames = cn("min-h-[12px] mb-[-6px] py-1 text-sm", feedbackColor[feedbackType], className);

	return (
		<div className={classNames}>
			<p className="flex items-center gap-1">
				<IconAlert className="flex-shrink-0" fill="currentColor" height={15} width={15} />
				<span>{text}</span>
			</p>
		</div>
	);
};

export default FeedbackMessage;
