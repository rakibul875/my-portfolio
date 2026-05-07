export default function Container({ children, className = "", id }) {
  return (
    <section id={id} className={`px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
