import { useEffect, useState } from "react";

interface ImageContainer {
  src: string;
  alt?: string;
  className?: string;
  classNameBlur?: string;
  x1x16: boolean;
}

function ImageContainer({
  src,
  alt,
  className,
  classNameBlur,
  x1x16
}: ImageContainer) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {isLoading ? (
        <img className={className} src={src} alt={alt} />
      ) : (
        <div
          className={className}
          style={{ display: isLoading ? "none" : "block" }}
        >
          <div
            className={classNameBlur}
            style={{
              width: `100%`,
              height: `0`,
              borderRadius: "10px",
              paddingBottom: `${x1x16 ? '100%' : '56.25%'}`,
              backgroundColor: "grey",
            }}
          />
        </div>
      )}
    </>
  );
}

export default ImageContainer;
