import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c786fb84592ce6ecf58ee38308f4a676~c5_100x100.jpeg?x-expires=1653058800&x-signature=ttz%2FBawJLgJlnweY%2FP8NtfwnvvE%3D"
          alt="Đại cute"
        />
      </div>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Đỗ Tiến Đại</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>dotiendai1996</span>
      </div>
    </div>
  );
}

export default AccountItem;
