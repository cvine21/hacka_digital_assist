import { useState } from "react";

import { AppInfo } from "../AppInfo";
import { SearchPanel } from "../SearchPanel";
import { AppFilter } from "../AppFilter";
import { EmployeesList } from "../EmployeesList";
import { EmployeesAddForm } from "../EmployeesAddForm";

import type { Employee } from "../../types";

import styles from "./App.module.scss";

export default function App() {
	const [data, setData] = useState<Employee[]>([
		{
			name: "John C.",
			salary: 800,
			increase: false,
			rise: true,
			id: 1,
		},
		{
			name: "Alex M.",
			salary: 3000,
			increase: false,
			rise: false,
			id: 2,
		},
		{
			name: "Carl W.",
			salary: 5000,
			increase: false,
			rise: false,
			id: 3,
		},
	]);

	const [term, setTerm] = useState<string>("");
	const [filter, setFilter] = useState<string>("all");
	const [maxId, setMaxId] = useState<number>(data.length + 1);

	const deleteItem = (id: number) => {
		setData((prevData) => ({
			...prevData,
			data: prevData.filter((item) => item.id !== id),
		}));
	};

	const addItem = (name: string, salary: number | string) => {
		const newItem: Employee = {
			name: name,
			salary: salary,
			increase: false,
			rise: false,
			id: maxId + 1,
		};
		setData((prevData) => [...prevData, newItem]);
		setMaxId((prevMaxId) => prevMaxId + 1);
	};

	const onToggleProp = (id: number, prop: keyof Employee) => {
		setData((prevData) => ({
			...prevData,
			data: prevData.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	const searchEmp = (items: Employee[], searchTerm: string) => {
		if (!searchTerm.length) return items;
		return items.filter((item) => item.name.indexOf(searchTerm) !== -1);
	};

	const onUpdateSearch = (searchTerm: string) => {
		setTerm(searchTerm);
	};

	const filterPost = (items: Employee[], selectedFilter: string) => {
		switch (selectedFilter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThan1000":
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};

	const onFilterSelect = (selectedFilter: string) => {
		setFilter(selectedFilter);
	};

	const increased = data.filter((item) => item.increase).length;
	const filteredData = filterPost(data, filter);
	const visibleData = searchEmp(filteredData, term);

	return (
		<div className={styles.app}>
			<AppInfo employees={data.length} increased={increased} />

			<div className={styles["search-panel"]}>
				<SearchPanel onUpdateSearch={onUpdateSearch} />
				<AppFilter filter={filter} onFilterSelect={onFilterSelect} />
			</div>

			<EmployeesList
				data={visibleData}
				onDelete={deleteItem}
				onToggleProp={onToggleProp}
			/>
			{/* <EmployeesAddForm onAdd={addItem} /> */}
		</div>
	);
}
