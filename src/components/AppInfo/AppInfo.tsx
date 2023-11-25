import React from "react";

import styles from "./AppInfo.module.scss";

interface AppInfoProps {
	employees: number;
	increased: number;
}

const AppInfo: React.FC<AppInfoProps> = ({ employees, increased }) => {
	return (
		<div className={styles["app-info"]}>
			<h1>Заявки к обработке</h1>
			<h2>Общее число заявок: {employees}</h2>
		</div>
	);
};

export default AppInfo;
