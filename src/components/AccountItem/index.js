import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <Image
          src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
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
