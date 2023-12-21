import { useState } from "react";
// PLUGINS
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// COMPONENTS
import { Table, SearchBar, UserModal, Pagination } from "~/components";
// ICONS
import { ReactComponent as TrashIcon } from "~/icons/trash.svg";
import { ReactComponent as PenToSquareIcon } from "~/icons/pent-to-square.svg";
import { ReactComponent as EyeIcon } from "~/icons/eye.svg";
// MODELS
import { User } from "~/models";
// HOOKS
import { useUser } from "~/hooks";

const titleAbbr = { mr: "Sr.", ms: "Sra.", miss: "Srta.", dr: "Dr." };

export default function UserTable() {
	const [showModal, setShowModal] = useState(false);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(0);
	const [modalData, setModalData] = useState<{ user?: User; mode?: "edit" | "view" }>();
	const { data, getUser, deleteUser } = useUser({ page });

	const filtered = data?.users.filter((user) => {
		return search.toLocaleLowerCase() === "" ? user : user.firstName.toLocaleLowerCase().includes(search);
	});

	return (
		<>
			<div className="overflow-auto">
				<div className="flex justify-end gap-5 mb-2">
					<SearchBar placeholder="Id a buscar" onChange={(value) => setSearch(value)} />

					<button
						className="text-white bg-teal-800 hover:bg-teal-700 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center"
						type="button"
						onClick={() => {
							setModalData({});
							setShowModal(true);
						}}
					>
						Crear Usuario
					</button>
				</div>

				<Table>
					<Table.Head>
						<Table.Row>
							<Table.Cell scope="col" tag="th">
								ID
							</Table.Cell>

							<Table.Cell scope="col" tag="th">
								Nombres y Apellidos
							</Table.Cell>

							<Table.Cell scope="col" tag="th">
								Foto
							</Table.Cell>

							<Table.Cell className="text-center" scope="col" tag="th">
								Acciones
							</Table.Cell>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{filtered?.map((user) => (
							<Table.Row key={user.id} className="text-black bg-white border-b">
								<Table.Cell className="font-bold" tag="td">
									{user.id}
								</Table.Cell>

								<Table.Cell tag="td">{`${titleAbbr[user.title as keyof typeof titleAbbr]} ${user.firstName} ${
									user.lastName
								}`}</Table.Cell>

								<Table.Cell tag="td">
									<picture className="block rounded-full w-11 h-11">
										<img alt="Avatar" className="object-contain rounded-[inherit] bg-teal-800" src={user.picture} />
									</picture>
								</Table.Cell>

								<Table.Cell className="flex justify-center gap-2" tag="td">
									<button
										type="button"
										onClick={() => {
											confirmAlert({
												title: "¿Está seguro que desea eliminar el usuario seleccionado?",
												buttons: [
													{
														label: "Sí, eliminar",
														onClick: () => {
															deleteUser({ id: user.id });

															toast.success("Usuario eliminado correctamente!", {
																position: "top-right",
																theme: "colored",
															});
														},
													},
													{
														label: "No, regresar",
													},
												],
											});
										}}
									>
										<TrashIcon fill="currentColor" height={24} width={24} />
									</button>

									<button
										type="button"
										onClick={() => {
											getUser({ id: user.id }).then((user) => {
												setModalData({ user, mode: "edit" });
												setShowModal(true);
											});
										}}
									>
										<PenToSquareIcon fill="currentColor" height={24} width={24} />
									</button>

									<button
										type="button"
										onClick={() => {
											getUser({ id: user.id }).then((user) => {
												setModalData({ user, mode: "view" });
												setShowModal(true);
											});
										}}
									>
										<EyeIcon fill="currentColor" height={24} width={24} />
									</button>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>

				<Pagination
					className="mt-2"
					itemsPerPage={data?.limit}
					pages={data?.total}
					position="right"
					onChangePage={({ currentPage }) => setPage(currentPage - 1)}
				/>
			</div>

			<ToastContainer />

			<UserModal show={showModal} {...modalData} onClose={() => setShowModal(false)} />
		</>
	);
}
