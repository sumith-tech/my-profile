import {
  FiGithub,
  FiMail,
  FiGlobe,
  FiLinkedin,
  FiInstagram,
  FiPhone,
} from "react-icons/fi";
import classes from "./Footer.module.css";

const socialLinks = [
  {
    id: 1,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/a-sumith",
  },
  {
    id: 2,

    icon: <FiGithub />,
    url: "https://github.com/sumith-tech/",
  },
  {
    id: 3,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/chief_minister_of_tamilnadu/",
  },

  {
    id: 4,

    icon: <FiGlobe />,
    url: "https://sumithweb.netlify.app/",
  },
];

const Footer = () => {
  return (
    <div className={classes.footcontainor}>
      <div>
        <p className={classes.follw}>Contacts</p>
        <ul className={classes.lists1}>
          <a
            href="mailto:sumith2200.ss@gmail.com"
            target="__blank"
            key="6"
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
          >
            <i className="text-xl sm:text-2xl md:text-3xl">
              <FiMail />
            </i>
          </a>{" "}
          <a
            href="tel:+918610072412"
            target="__blank"
            key="5"
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
          >
            <i className="text-xl sm:text-2xl md:text-3xl">
              <FiPhone />
            </i>
          </a>
        </ul>
      </div>
      <div>
        <p className={classes.follw}>Follow me</p>
        <ul className={classes.lists2}>
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              y
              key={link.id}
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
            >
              <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
