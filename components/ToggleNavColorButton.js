import HeaderContext from "../contexts/HeaderContext";
import { useContext } from "react";

export default function ToggleNavColorButton() {
	const { color, setColor } = useContext(HeaderContext);

	return (
		<button style={{ outline: "none" }} onClick={() => setColor(!color)}>
			Color Change
		</button>
	);
}
