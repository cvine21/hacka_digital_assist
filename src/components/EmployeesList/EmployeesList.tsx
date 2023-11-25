import clsx from "clsx";

import { EmployeesListItem } from "../EmployeesListItem";

import type { Employee } from "../../types";

import styles from "./EmployeesList.module.scss";

interface EmployeesListProps {
	data: Employee[];
	onDelete: (id: number) => void;
	onToggleProp: (id: number, prop: keyof Employee) => void;
}

export default function EmployeesList({
	data,
	onDelete,
	onToggleProp,
}: EmployeesListProps) {
	return (
		<ul className={clsx(styles["app-list"], styles["list-group"])}>
			{data.map((item) => {
				const { id, ...itemProps } = item;
				return (
					<EmployeesListItem
						key={id}
						onDelete={() => onDelete(id)}
						onToggleProp={(e: React.MouseEvent) =>
							onToggleProp(
								id,
								(e.currentTarget.getAttribute("data-toggle") ||
									"") as keyof Employee
							)
						}
						{...itemProps}
					/>
				);
			})}
		</ul>
	);
}
