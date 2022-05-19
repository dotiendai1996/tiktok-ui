import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <img src={images.logo} alt="Tiktok logo" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Acccount</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button type="secondary" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Tải lên
          </Button>
          <Button type="primary">Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
