// LIBRARIES
import axios from "~/lib/axios";
// MODELS
import type { UserList, User } from "~/models";

export async function getUsers() {
	const { data } = await axios<UserList>("/user?created=1");

	return data;
}

export async function getUser({ id }: Pick<User, "id">) {
	const { data } = await axios.get<User>(`/user/${id}`);

	return data;
}

export async function createUser(payload: Omit<Partial<User>, "id">) {
	const { data } = await axios.post<User>("/user/create", payload);

	return data;
}

export async function updateUser(payload: Partial<User>) {
	const { id, ...user } = payload;
	const { data } = await axios.put<User>(`/user/${id}`, user);

	return data;
}

export async function deleteUser({ id }: Pick<User, "id">) {
	const { data } = await axios.delete<Pick<User, "id">>(`/user/${id}`);

	return data;
}
