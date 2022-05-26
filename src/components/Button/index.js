import { forwardRef, useRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

const cx = classNames.bind(style);

function Button(
  {
    to,
    href,
    type = "primary",
    rounded = false,
    size = "medium",
    disabled = false,
    className,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
  },
  ref,
) {
  let Comp = "button";

  const properties = {
    onClick,
    ...passProps, // target="_blank", ...
  };

  if (disabled) {
    // delete properties.onClick;
    // Remove event listenter when btn is disabled
    Object.keys(properties).forEach((key) => {
      if (key.startsWith("on")) {
        delete properties[key];
      }
    });
  }

  if (to) {
    Comp = Link;
    properties.to = to;
  } else if (href) {
    Comp = "a";
    properties.href = href;
  }

  const classes = cx("wrapper", {
    disabled,
    rounded,
    [type]: type,
    [size]: size,
    [className]: className,
  });

  return (
    <Comp ref={ref} className={classes} {...properties}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("name")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default forwardRef(Button);
