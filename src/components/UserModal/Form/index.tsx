import { useEffect } from "react";
// PLUGINS
import { useFormContext } from "react-hook-form";
// COMPONENTS
import { Form } from "~/components";
// MODELS
import type { User } from "~/models";

interface Props {
	user?: User;
	mode?: "edit" | "view";
}

export default function UserForm({ user, mode }: Props) {
	const disabled = mode === "view";

	const { reset } = useFormContext();

	useEffect(() => {
		reset({
			title: user?.title || "",
			firstName: user?.firstName || "",
			lastName: user?.lastName || "",
			picture: user?.picture || "",
			email: user?.email || "",
			dateOfBirth: user?.dateOfBirth?.split("T")[0] || "",
			phone: user?.phone || "",
			gender: user?.gender || "",
		});
	}, [user, reset]);

	return (
		<Form className="grid-cols-2 sm:grid gap-x-5">
			<Form.Select className="mt-2" disabled={disabled} feedbackType="warning" label="Título:" name="title">
				<Form.Select.Option value="">Seleccione...</Form.Select.Option>
				<Form.Select.Option value="mr">Sr.</Form.Select.Option>
				<Form.Select.Option value="ms">Sra.</Form.Select.Option>
				<Form.Select.Option value="miss">Srta.</Form.Select.Option>
				<Form.Select.Option value="dr">Dr.</Form.Select.Option>
			</Form.Select>

			<Form.Input
				className="mt-2"
				disabled={disabled}
				feedbackType="warning"
				label="Nombres:"
				name="firstName"
				type="text"
			/>

			<Form.Input
				className="mt-2"
				disabled={disabled}
				feedbackType="warning"
				label="Apellidos:"
				name="lastName"
				type="text"
			/>

			<Form.Input
				className="mt-2"
				disabled={disabled}
				feedbackType="warning"
				label="Imagen:"
				name="picture"
				type="text"
			/>

			<Form.Select className="mt-2" disabled={disabled} feedbackType="warning" label="Género:" name="gender">
				<Form.Select.Option value="">Seleccione...</Form.Select.Option>
				<Form.Select.Option value="male">Masculino</Form.Select.Option>
				<Form.Select.Option value="female">Femenino</Form.Select.Option>
				<Form.Select.Option value="other">Otro</Form.Select.Option>
			</Form.Select>

			<Form.Input
				className="mt-2"
				disabled={disabled}
				feedbackType="warning"
				label="Correo electrónico:"
				name="email"
				type="email"
			/>

			<Form.Input
				className="mt-2"
				disabled={disabled}
				feedbackType="warning"
				label="Fecha de nacimiento:"
				name="dateOfBirth"
				type="date"
			/>

			<Form.Input
				className="mt-2"
				disabled={disabled}
				feedbackType="warning"
				label="Teléfono:"
				name="phone"
				type="text"
			/>
		</Form>
	);
}
