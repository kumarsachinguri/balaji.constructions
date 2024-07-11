const Icon = ({
  name,
  size,
  color = "black",
}: {
  name: string;
  size: number;
  color?: string;
}) => {
  return (
    <svg
      style={{
        width: size + "rem",
        height: size + "rem",
        fill: color,
        display: "inline-block",
      }}
    >
      <use xlinkHref={"icons.svg#icon-" + name}></use>
    </svg>
  );
};

export default Icon;
