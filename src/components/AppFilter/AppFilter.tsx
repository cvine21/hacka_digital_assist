import { useState } from "react";
import { Tabs, TabItem } from "@salutejs/plasma-web";

// import { IconClockFilled, IconInfo } from "@salutejs/plasma-icons";

interface AppFilterProps {
	filter: string;
	onFilterSelect: (filter: string) => void;
}

export default function AppFilter({ filter, onFilterSelect }: AppFilterProps) {
	const [index, setIndex] = useState(0);
	const buttonsData = [
		{ name: "all", label: "Все заявки" },
		{ name: "new", label: "Новая" },
		{ name: "inProcess", label: "В работе" },
		{ name: "additionalInfoRequest", label: "Дозапрос информации" },
		{ name: "underRevision", label: "На доработке" },
	];

	// const icons: Record<string, JSX.Element> = {
	// 	all: <IconClockFilled color="inherit" />,
	// 	new: <IconClockFilled color="inherit" />,
	// 	inProcess: <IconClockFilled color="inherit" />,
	// 	additionalInfoRequest: <IconInfo color="inherit" />,
	// 	underRevision: <IconClockFilled color="inherit" />,
	// };

	const onClick = (name: string, idx: number) => {
		onFilterSelect(name);
		setIndex(idx);
	};

	const items = buttonsData.map(({ name, label }, i) => {
		return (
			<TabItem
				key={`item:${i}`}
				isActive={i === index}
				tabIndex={i}
				// contentLeft={icons[name]}
				onClick={() => onClick(name, i)}
			>
				{label}
			</TabItem>
		);
	});

	return <Tabs stretch={true}>{items}</Tabs>;
}
