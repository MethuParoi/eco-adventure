import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer bg-secondary text-neutral p-10">
      <aside>
        <h2 className="text-2xl font-semibold">Eco-Adventure Experiences</h2>
        <p>Creating exciting memories</p>
      </aside>
      <nav>
        <h6 className="footer-title">packages</h6>
        <a className="link link-hover">Family</a>
        <a className="link link-hover">Couples</a>
        <a className="link link-hover">Student</a>
        <a className="link link-hover">Corporate</a>
      </nav>
      <nav>
        <h6 className="footer-title">Get in touch</h6>
        <a
          href="https://www.linkedin.com/in/methu-p-6aa311204/"
          target="_blank"
          className="link link-hover"
        >
          <div className="flex gap-x-4 font-medium">
            <FaLinkedin />
            Linked In
          </div>
        </a>
        <a
          href="https://x.com/methu_paroi"
          target="_blank"
          className="link link-hover"
        >
          <div className="flex gap-x-4 font-medium">
            <FaSquareXTwitter />
            Twitter
          </div>
        </a>
        <a
          href="https://www.facebook.com/methu.paroi.1/"
          target="_blank"
          className="link link-hover"
        >
          <div className="flex gap-x-4 font-medium">
            <FaFacebook />
            Facebook
          </div>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
