export interface User {
	id: string;
	title: string;
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	dateOfBirth?: string;
	registerDate?: string;
	phone: string;
	picture?: string;
}

export interface UserList {
	data: User[];
	total: number;
	page: number;
	limit: number;
}
