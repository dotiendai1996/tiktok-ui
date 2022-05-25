import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faPlus,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faMixcloud } from "@fortawesome/free-brands-svg-icons";
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "~/assets/images";
import styles from "./Header.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
          type: "language",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
          type: "language",
        },
        {
          code: "au",
          title: "Australia",
          type: "language",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: "Keyboard shortcuts" },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const userProfile = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: "View profile", to: "/user" },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: "Get coins", to: "/coin" },
    { icon: <FontAwesomeIcon icon={faGear} />, title: "Settings", to: "/settings" },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: "Log out", separate: true },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <img src={images.logo} alt="Tiktok logo" />
        <TippyHeadless
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
        </TippyHeadless>

        <div className={cx("action")}>
          {userProfile ? (
            <>
              <Tippy
                interactive
                offset={[12, 8]}
                delay={[0, 700]}
                placement="bottom-end"
                content="Upload file"
              >
                <button className={cx("upload")}>
                  <FontAwesomeIcon icon={faMixcloud} />
                </button>
              </Tippy>
              <Menu items={userMenu} onChange={handleMenuChange}>
                <div className={cx("thumb-avatar")}>
                  <img
                    src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
                    alt="Avatar"
                  />
                </div>
              </Menu>
            </>
          ) : (
            <>
              <Button type="secondary" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>
              <Button type="primary">Đăng nhập</Button>
              <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
