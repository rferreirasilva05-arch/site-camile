// Imagem simples: preenche o contêiner (object-cover) e carrega sob demanda.
export default function Image({ src, alt, className = "", fittingType, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`${className} ${fittingType === "fit" ? "object-cover object-top" : "object-cover"}`}
      {...props}
    />
  );
}
