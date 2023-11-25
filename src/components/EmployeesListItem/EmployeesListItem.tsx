import React from "react";
import styles from "./EmployeesListItem.module.scss";

interface EmployeesListItemProps {
	name: string;
	salary: number | string;
	onDelete: () => void;
	onToggleProp: (e: React.MouseEvent, prop: string) => void;
	increase: boolean;
	rise: boolean;
}

export default function EmployeesListItem({
	name,
	salary,
	onDelete,
	onToggleProp,
	increase,
	rise,
}: EmployeesListItemProps) {
	let classNames = `${styles["list-group-item"]} ${styles["d-flex"]} ${styles["justify-content-between"]}`;
	if (increase) {
		classNames += ` ${styles["increase"]}`;
	}
	if (rise) {
		classNames += ` ${styles["like"]}`;
	}

	return (
		<li className={classNames}>
			<span
				className={styles["list-group-item-label"]}
				onClick={(e) => onToggleProp(e, "rise")}
				data-toggle="rise"
			>
				{name}
			</span>
			<input
				type="text"
				className={styles["list-group-item-input"]}
				defaultValue={`${salary}$`}
			/>
			<div
				className={`${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["align-items-center"]}`}
			>
				<button
					type="button"
					className={`${styles["btn-cookie"]} ${styles["btn-sm"]}`}
					onClick={(e) => onToggleProp(e, "increase")}
					data-toggle="increase"
				>
					<i className="fas fa-cookie"></i>
				</button>

				<button
					type="button"
					className={`${styles["btn-trash"]} ${styles["btn-sm"]}`}
					onClick={onDelete}
				>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
}
