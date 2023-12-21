import _Table from "./Table";
import Head from "./Head";
import Body from "./Body";
import Row from "./Row";
import Cell from "./Cell";

const Table = Object.assign(_Table, {
	Head,
	Body,
	Row,
	Cell,
});

export default Table;
