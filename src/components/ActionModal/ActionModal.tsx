interface Props {
	show?: boolean;
	children?: React.ReactNode;
}

export default function ActionModal({ children, show }: Props) {
	return (
		<>
			<dialog
				className="fixed z-50 w-full max-w-[560px] max-h-full transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow md:max-w-2xl top-1/2 left-1/2"
				open={show}
				tabIndex={-1}
			>
				{children}
			</dialog>

			{show && <div className="fixed top-0 right-0 z-[40] min-h-screen min-w-[100vw] opacity-60 bg-neutral-900" />}
		</>
	);
}
