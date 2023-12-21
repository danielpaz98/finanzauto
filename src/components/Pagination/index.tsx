import { useState, useEffect } from "react";
// UTILS
import { cn } from "~/utils";
// ICONS
import { ReactComponent as IconDoubleArrowLeft } from "~/icons/left-double-arrow.svg";
import { ReactComponent as IconArrowLeft } from "~/icons/left-arrow.svg";
import { ReactComponent as IconDoubleArrowRight } from "~/icons/right-double-arrow.svg";
import { ReactComponent as IconArrowRight } from "~/icons/right-arrow.svg";

interface ParamsOnChangePage {
	offset: number;
	currentPage: number;
}

export interface Props {
	className?: string;
	pages?: number;
	itemsPerPage?: number;
	limit?: number;
	position?: "left" | "right" | "center";
	showTotalPages?: boolean;
	onChangePage?: ({ offset, currentPage }: ParamsOnChangePage) => void;
}

const Pagination = ({
	pages = 0,
	itemsPerPage = 10,
	limit = 5,
	position = "left",
	showTotalPages = true,
	className,
	onChangePage,
}: Props = {}) => {
	const classNames = cn(
		"flex flex-wrap items-center justify-start gap-5 font-medium text-gray-500 border-t-0",
		className,
	);

	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(pages / itemsPerPage);

	const midRange = limit > 2 ? Math.round(limit / 2) - 1 : limit;

	const counter =
		limit > 2
			? currentPage > midRange && totalPages >= limit
				? Math.min(currentPage - midRange, totalPages - (limit - 1))
				: 1
			: Math.min(currentPage, totalPages - (limit - 1));

	const _limit = totalPages >= limit ? limit : totalPages;

	const indexButtons = Array(_limit)
		.fill(null)
		.map((_, i) => i + counter);

	const nextPage = (): void => setCurrentPage((curr) => Math.min(curr + 1, totalPages));

	const previousPage = (): void => setCurrentPage((curr) => Math.max(curr - 1, 1));

	useEffect(() => {
		onChangePage?.({ offset: itemsPerPage * (currentPage - 1), currentPage });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, itemsPerPage]);

	return pages > 1 ? (
		<div
			className={cn(classNames, (position === "right" && "justify-end") || (position === "center" && "justify-center"))}
		>
			{showTotalPages && (
				<p className="mx-auto sm:mx-0">
					Página {currentPage}/{totalPages}
				</p>
			)}

			<div className="flex mx-auto overflow-hidden border border-gray-300 rounded bg-neutral-2 sm:mx-0">
				<button
					className="flex items-center py-1 px-2 outline-none disabled:cursor-not-allowed disabled:text-gray-300 [&:not(:disabled):active]:bg-gray-300 [&:not(:disabled):active]:text-gray-500 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-gray-200"
					disabled={currentPage === 1}
					type="button"
					onClick={() => setCurrentPage(1)}
				>
					<IconDoubleArrowLeft className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</button>

				<button
					className="flex items-center py-1 px-2 outline-none disabled:cursor-not-allowed disabled:text-gray-300 [&:not(:disabled):active]:bg-gray-300 [&:not(:disabled):active]:text-gray-500 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-gray-200"
					disabled={currentPage === 1}
					type="button"
					onClick={previousPage}
				>
					<IconArrowLeft className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</button>

				<div className="flex [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-neutral-1">
					{indexButtons.map((index) => (
						<button
							key={index}
							className={cn(
								"flex items-center py-1 px-2 outline-none disabled:cursor-not-allowed disabled:text-gray-300 [&:not(:disabled):active]:bg-gray-300 [&:not(:disabled):active]:text-gray-500 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-gray-200",
								{ "bg-gray-200": currentPage === index },
							)}
							type="button"
							onClick={() => setCurrentPage(index)}
						>
							<span>{index}</span>
						</button>
					))}
				</div>

				<button
					className="flex items-center py-1 px-2 outline-none disabled:cursor-not-allowed disabled:text-gray-300 [&:not(:disabled):active]:bg-gray-300 [&:not(:disabled):active]:text-gray-500 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-gray-200"
					disabled={currentPage === totalPages}
					type="button"
					onClick={nextPage}
				>
					<IconArrowRight className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</button>

				<button
					className="flex items-center py-1 px-2 outline-none disabled:cursor-not-allowed disabled:text-gray-300 [&:not(:disabled):active]:bg-gray-300 [&:not(:disabled):active]:text-gray-500 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-gray-200"
					disabled={currentPage === totalPages}
					type="button"
					onClick={() => setCurrentPage(totalPages)}
				>
					<IconDoubleArrowRight className="pointer-events-none" fill="currentColor" height={12} width={12} />
				</button>
			</div>
		</div>
	) : null;
};

export default Pagination;
