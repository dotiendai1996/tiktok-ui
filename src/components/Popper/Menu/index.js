import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFnc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFnc }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, i) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={i}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      delay={[0, 700]}
      offset={[12, 8]}
      render={(attrs) => (
        <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("popper-wrapper")}>
            {history.length > 1 && <Header title={"Language"} onBack={handleBack} />}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
