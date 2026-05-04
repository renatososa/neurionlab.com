import Icon from "./Icon";

const variants = {
  primary: "bg-[#38B26D] text-white shadow-lg shadow-[#38B26D]/20 hover:bg-[#2fa161]",
  secondary: "border border-[#D6DEE3] bg-white text-[#1F252B] hover:border-[#38B26D]/40 hover:bg-[#F7F9FA]",
  ghost: "bg-[#1F252B] text-white hover:bg-[#161b20]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  const styles = variants[variant] || variants.primary;
  const sharedClassName = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${styles} ${
    disabled ? "cursor-not-allowed opacity-60" : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={sharedClassName}>
        {children}
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={sharedClassName} disabled={disabled}>
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </button>
  );
}
