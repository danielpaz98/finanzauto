// PLUGINS
import { toast } from "react-toastify";
// COMPONENTS
import { ActionModal } from "~/components";
import UserForm from "./Form";
// MODELS
import { User } from "~/models";
// SCHEMAS
import { userSchema } from "./schemas";
// HOOKS
import { useUser } from "~/hooks";

// PLUGINS
import { FormProvider, useForm } from "react-hook-form";

type Props = {
	show?: boolean;
	user?: User;
	mode?: "edit" | "view";
	onClose?: () => void;
};

export default function UserModal({ show, user, mode, onClose }: Props) {
	const modalTitle =
		mode === "edit" ? "Modificación de usuario" : mode === "view" ? "Detalle del usuario" : "Crear usuario";

	const methods = useForm({ mode: "onChange", resolver: userSchema });

	const { createUser, updateUser } = useUser();

	const handleOnCloseModal = () => {
		methods.clearErrors();
		onClose?.();
	};

	const handleOnSubmit = (data: Partial<User>) => {
		if (mode === "edit") {
			updateUser({ ...data, id: user?.id } as User);

			toast.success("Los datos se han editado exitosamente!", {
				position: "top-right",
				theme: "colored",
			});
		} else {
			createUser(data);

			toast.success("El usuario se ha creado exitosamente!", {
				position: "top-right",
				theme: "colored",
			});
		}

		onClose?.();
	};

	return (
		<FormProvider {...methods}>
			<ActionModal show={show}>
				<ActionModal.Header className="text-center" title={modalTitle} onClose={handleOnCloseModal} />

				<ActionModal.Body>
					<UserForm mode={mode} user={user} />
				</ActionModal.Body>

				<ActionModal.Footer className="justify-end">
					{mode !== "view" && (
						<button
							className="text-white bg-teal-800 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							type="button"
							onClick={methods.handleSubmit(handleOnSubmit)}
						>
							Guardar
						</button>
					)}

					<button
						className="ms-3 focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
						type="button"
						onClick={handleOnCloseModal}
					>
						Cancelar
					</button>
				</ActionModal.Footer>
			</ActionModal>
		</FormProvider>
	);
}
