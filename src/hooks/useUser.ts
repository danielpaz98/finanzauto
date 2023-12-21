// PLUGINS
import _omit from "just-omit";
import useSWR from "swr";
// LIBRARIES
import { fetcher } from "~/lib";
// MODELS
import type { UserList, User } from "~/models";
// SERVICES
import {
	getUser,
	createUser as createUserService,
	updateUser as updateUserService,
	deleteUser as deleteUserService,
} from "~/services";

interface HookParams {
	limit?: number;
	page?: number;
}

export default function useUser({ limit = 5, page = 0 }: HookParams = {}) {
	const {
		data: _data,
		error,
		isLoading,
		mutate,
	} = useSWR<UserList, string>(`/user?created=1&limit=${limit}&page=${page}`, fetcher);

	const createUser = (payload: Omit<Partial<User>, "id">) => {
		createUserService(payload).then(() => mutate());
	};

	const updateUser = (payload: Partial<User>) => {
		updateUserService(payload).then(() => mutate());
	};

	const deleteUser = ({ id }: Pick<User, "id">) => {
		deleteUserService({ id }).then(() => mutate());
	};

	const data = _data ? { users: _data?.data, ..._omit(_data, ["data"]) } : undefined;

	return { data, getUser, createUser, updateUser, deleteUser, error, isLoading };
}
