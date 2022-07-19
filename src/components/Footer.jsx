import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaAngellist,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";
import FooterBox from "./FooterBox";

export default function Footer() {
  return (
    <section id="footer">
      {/* Left */}
      <div className="footer-top">
        <div className="footer-img-box">
          <img
            src="/images/logo-transparent.png"
            alt="codemen logo"
            className="footerLogo"
          />
        </div>

        <div className="row footer-img-box">
          <FooterBox
            title="PRODUCT"
            sections={[
              "Features",
              "Integrations",
              "Documentation",
              "API",
              "Status",
            ]}
          />
          <FooterBox
            title="SOLUTIONS"
            sections={["Open", "Enterprise", "Startups", "Education"]}
          />
          <FooterBox
            title="CUSTOMERS"
            sections={["Customers", "Case Studies", "Community"]}
          />
          <FooterBox
            title="RESOURCES"
            sections={["Webinars", "Blog", "Documentation"]}
          />
          <FooterBox
            title="COMPANY"
            sections={["Team", "Press", "Careers", "Write for us"]}
          />
          <FooterBox
            title="CONTACT US"
            sections={["Contact", "Demo", "Support"]}
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="socials">
          <span className="socialLogo">
            <FaLinkedin />
          </span>
          <span className="socialLogo">
            <FaTwitter />
          </span>
          <span className="socialLogo">
            <FaGithub />
          </span>
          <span className="socialLogo">
            <FaYoutube />
          </span>
          <span className="socialLogo">
            <FaAngellist />
          </span>
          <span className="socialLogo">
            <FaFacebookMessenger />
          </span>
          <span className="socialLogo">
            <FaInstagram />
          </span>
        </div>
        <div className="copyright">© CodeMen 2022</div>
      </div>
    </section>
  );
}
