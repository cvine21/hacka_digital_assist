import React, { useState, ChangeEvent, FormEvent } from "react";

import styles from "./EmployeesAddForm.module.scss";

interface EmployeesAddFormProps {
	onAdd: (name: string, salary: number | string) => void;
}

const EmployeesAddForm: React.FC<EmployeesAddFormProps> = ({ onAdd }) => {
	const [formData, setFormData] = useState({
		name: "",
		salary: "",
	});

	const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, salary } = formData;

		if (!name.length || !salary) return;

		onAdd(name, salary);
		setFormData({
			name: "",
			salary: "",
		});
	};

	const { name, salary } = formData;

	return (
		<div className={styles["app-add-form"]}>
			<h3>Добавьте нового сотрудника</h3>
			<form
				className={`${styles["add-form"]} ${styles["d-flex"]}`}
				onSubmit={onSubmit}
			>
				<input
					type="text"
					className={`${styles["form-control"]} ${styles["new-post-label"]}`}
					placeholder="Как его зовут?"
					name="name"
					value={name}
					onChange={onValueChange}
				/>
				<input
					type="number"
					className={`${styles["form-control"]} ${styles["new-post-label"]}`}
					placeholder="З/П в $?"
					name="salary"
					value={salary}
					onChange={onValueChange}
				/>

				<button
					type="submit"
					className={`${styles["btn"]} ${styles["btn-outline-light"]}`}
				>
					Добавить
				</button>
			</form>
		</div>
	);
};

export default EmployeesAddForm;
