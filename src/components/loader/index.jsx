import { TailSpin } from "react-loader-spinner";
import "./loader.css";
export default function Loader({ show }) {
  return (
    <div id="loader" className={show ? "show" : "hide"}>
      <TailSpin
        id="circleLoader"
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading"
        wrapperClass="loader-wrapper"
      />
    </div>
  );
}
