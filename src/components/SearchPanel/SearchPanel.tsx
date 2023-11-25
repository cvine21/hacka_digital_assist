import { useState, ChangeEvent } from "react";
import { TextField } from "@salutejs/plasma-web";

interface SearchPanelProps {
	onUpdateSearch: (term: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onUpdateSearch }) => {
	const [term, setTerm] = useState("");

	const handleUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;

		setTerm(searchTerm);
		onUpdateSearch(searchTerm);
	};

	return (
		<TextField
			placeholder="Найти участника"
			value={term}
			onChange={handleUpdateSearch}
		/>
	);
};

export default SearchPanel;
