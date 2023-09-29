import styles from "./Navbar.module.css";
import { GiChest, GiOpenChest, GiOpenTreasureChest } from 'react-icons/gi';


export default function Navbar() {

	return (
		<div className={styles.main}>

			<h2 className={styles.center}>Sally Resch | Fullstack Java developer</h2>
			<div className={styles.easteregg}>
				<GiChest size={30} />
				<GiOpenChest size={30} />
				<GiOpenTreasureChest size={30} />
			</div>
		</div>
	)
}
