import Box from "@mui/material/Box";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";

import { Container } from "@salutejs/plasma-web/components/Grid";

import styles from "./Table.module.scss";

export default function DataGridProDemo() {
	const { data } = useDemoData({
		dataSet: "Commodity",
		rowLength: 100000,
		editable: true,
	});

	return (
		<Container>
			<Box sx={{ height: 520, width: "100%" }}>
				<DataGridPro
					className={styles.bg}
					{...data}
					loading={data.rows.length === 0}
					rowHeight={38}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</Container>
	);
}
