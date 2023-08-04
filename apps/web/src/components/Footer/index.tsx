export default function Footer() {
  return (
    <footer className="container sticky py-4 text-center top-full">
      <p className="font-mono text-sm">
        made with
        <span
          title="Big Brain"
          aria-label="Big Brain"
          className="mx-2 select-none"
        >
          🧠
        </span>
        by{" "}
        <a href="https://kezant.com" target="_blank">
          @kezant
        </a>
      </p>
    </footer>
  );
}
