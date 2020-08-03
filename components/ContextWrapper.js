import HeaderContext from "../contexts/HeaderContext";
import { useState } from "react";

export default function ContextWrapper({ children, navigation }) {
	const [menuItems] = useState(navigation);
	const [color, setColor] = useState(true);

	return (
		<HeaderContext.Provider value={{ menuItems, color, setColor }}>
			{children}
		</HeaderContext.Provider>
	);
}
