import Styles from "./HomeCard.module.css";
import { MdInfoOutline } from "react-icons/md";

export default function EmptyState() {
  return (
    <p className={Styles["errorMessage"]}>
      <MdInfoOutline style={{ marginRight: "6px", verticalAlign: "middle" }} />
      Nearby destinations are not available.
    </p>
  );
}
