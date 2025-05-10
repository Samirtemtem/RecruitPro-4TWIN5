const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} RECRUITPRO by{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Infinite Loopers
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
