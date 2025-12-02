export default function Section({ id, title, children, className }) {
  return (
    <section
      id={id}
      className={className}
      style={{
        paddingTop: "20px", // mniejszy odstęp od navbaru
        paddingBottom: "100px", // pozostawiam dolny padding taki jak wcześniej
        paddingLeft: "20px",
        paddingRight: "20px",
        maxWidth: "1100px",
        margin: "auto",
        position: "relative"
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#1e90ff",
          textTransform: "uppercase",
          letterSpacing: "2px",
          position: "relative",
          zIndex: 2
        }}
      >
        {title}
      </h2>

      <div
        style={{
          color: "#ccc",
          fontSize: "18px",
          lineHeight: "1.6",
          position: "relative",
          zIndex: 2
        }}
      >
        {children}
      </div>
    </section>
  );
}
