import fb from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div className="justify-between flex w-full p-5 font-semibold items-center pl-16 border-t-[1px] border-neutral-900 h-full">
      <div>Swiftcart &copy; 2023</div>
      <div className="flex items-center gap-3">
        <p className="font-bold">FOLLOW US</p>
        <ul className="flex gap-2">
          <li className="h-10 w-10 ">
            <img src={fb} alt="" />
          </li>
          <li className="h-10 w-10 p-0.5">
            <img src={instagram} alt="" />
          </li>
          <li className="h-10 w-10 p-0.5">
            <img src={twitter} alt="" />
          </li>
          <li className="h-10 w-10 p-0.5">
            <img src={linkedin} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
