const ThemeIcon = ({themeColor} : {themeColor : string}) => {
  return (
    <div
      data-theme={themeColor}
      className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
    >
      <div className="bg-base-content size-1 rounded-full"></div>{" "}
      <div className="bg-primary size-1 rounded-full"></div>{" "}
      <div className="bg-secondary size-1 rounded-full"></div>{" "}
      <div className="bg-accent size-1 rounded-full"></div>
    </div>
  );
};

export default ThemeIcon;
