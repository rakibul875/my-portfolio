export default function Button({ children, variant = "primary", className = "", icon, ...props }) {
  const baseStyles = "font-h3 text-body-md py-4 rounded-xl font-bold transition-all duration-300 ease-in-out active:scale-95 flex items-center justify-center gap-3";
  
  const variants = {
    primary: "w-full bg-primary-container text-on-primary-container neon-glow hover:shadow-[0_0_25px_rgba(138,43,226,0.4)]",
    secondary: "w-full glass-card text-white light-stroke hover:bg-white/5",
    small: "bg-primary-container text-on-primary-container font-code-label text-caption px-4 py-2 rounded-full uppercase font-bold hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
