import { useRef, useState } from "react";
// PLUGINS
import { cn } from "~/utils";
// ICONS
import { ReactComponent as MagnifyingGlassIcon } from "~/icons/magnifying-glass.svg";
import { ReactComponent as XMarkIcon } from "~/icons/xmark.svg";

interface Props {
	className?: string;
	placeholder?: string;
	delay?: number;
	onChange?: (value: string) => void;
}

const SearchBar = ({ className, placeholder, delay = 500, onChange }: Props) => {
	const classNames = cn(className, "flex px-3 py-2 gap-2 border shadow text-gray-500");

	const [searchValue, setSearchValue] = useState("");
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);

		if (debounceRef.current !== null) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => onChange?.(e.target.value), delay);
	};

	const handleOnClear = () => {
		setSearchValue("");
		onChange?.("");
	};

	return (
		<div className={classNames}>
			<button type="button" onClick={() => inputRef?.current?.focus()}>
				<MagnifyingGlassIcon className="flex-shrink-0 w-6 h-6" fill="currentColor" />
			</button>

			<input
				ref={inputRef}
				className="w-full text-gray-500 rounded outline-none appearance-none"
				placeholder={placeholder}
				type="text"
				value={searchValue}
				onChange={handleOnChange}
			/>

			{searchValue !== "" && (
				<button type="button" onClick={handleOnClear}>
					<XMarkIcon className="flex-shrink-0 w-5 h-5" fill="currentColor" />
				</button>
			)}
		</div>
	);
};

export default SearchBar;
