import classNames from "classnames/bind";
import styles from "./Image.module.scss";
import { forwardRef, useState } from "react";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Image(
  { src, className, alt = "", fallback: globalFallback = images.defaultImg, ...props },
  ref,
) {
  const [fallback, setFallback] = useState("");

  const handleImgError = () => {
    setFallback(globalFallback);
  };

  return (
    <img
      ref={ref}
      className={cx("image", className)}
      src={fallback || src}
      alt={alt}
      onError={handleImgError}
      {...props}
    />
  );
}

export default forwardRef(Image);
