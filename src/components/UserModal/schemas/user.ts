import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const userSchema = yup.object({
	title: yup.string().required("Campo obligatorio"),
	firstName: yup.string().required("Campo obligatorio"),
	lastName: yup.string().required("Campo obligatorio"),
	picture: yup.string(),
	dateOfBirth: yup.string(),
	gender: yup.string().required("Campo obligatorio"),
	phone: yup
		.string()
		.required("Campo obligatorio")
		.matches(/^[0-9]+$/, "El campo debe contener solo números"),
	email: yup
		.string()
		.required("Campo obligatorio")
		.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "El campo debe ser un email válido"),
});

export type UserSchema = yup.InferType<typeof userSchema>;

export default yupResolver(userSchema);
