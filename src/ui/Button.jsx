import { Link } from "react-router-dom";

const base =
  "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none";

function Button({ children, disabled, to, type, onClick }) {
  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "bg-transparent border-2 text-sm border-stone-300 px-4 py-2 sm:px-6 sm:py-4 rounded-full md:py-3.5 hover:bg-stone-300 hover:text-stone-800",
    round: base + "px-2.5 py-1 md:px-2.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
