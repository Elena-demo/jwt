import style from "./Button.module.css";

export function Button(props) {
  console.log(props);
  return (
    <button type="button" className={style.btn} onClick={() => props.click()}>
      {" "}
      {props.text_btn}{" "}
    </button>
  );
}
