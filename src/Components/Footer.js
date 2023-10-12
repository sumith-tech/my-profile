import { FiGithub, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";
import classes from "./Footer.module.css";

const socialLinks = [
  {
    id: 1,
    icon: <FiMail />,
    
    url: "https://www.sumith2200.ss@gmail.com/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/sumith-tech/",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "www.linkedin.com/in/a-sumith",
  },

  {
    id: 4,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/chief_minister_of_tamilnadu/",
  },
];

const Footer = () => {
  return (
    <div className={classes.footcontainor}>
      <p className={classes.follw}>Follow me</p>
      <ul className={classes.lists}>
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
  );
};

export default Footer;
