import { socials, WebsiteName } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
     
        <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">This website was built by <a href="http://">raythompson</a> </p>
          </div>

          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-90">© 2024  {WebsiteName}. All Rights Reserved.</p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
