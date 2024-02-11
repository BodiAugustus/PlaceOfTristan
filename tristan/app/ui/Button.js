import clsx from "clsx";

export function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex  items-center rounded-lg transition-all duration-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ",
        className
      )}
    >
      {children}
    </button>
  );
}
