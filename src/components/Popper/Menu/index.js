import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  const renderItems = () => {
    return items.map((item, i) => <MenuItem key={i} data={item} />);
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[0, 700]}
      render={(attrs) => (
        <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("popper-wrapper")}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
