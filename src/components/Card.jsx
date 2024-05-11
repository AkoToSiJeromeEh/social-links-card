import PropTypes from "prop-types";
import { List } from "./List";

export const Card = ({ name, address, quotes, socialLinks, profileImg }) => {
  return (
    <div className="card-cont flex flex-col items-center text-center p-9 max-w-full   Mobile:min-w-[350px] gap-5 text-white bg-transparent rounded-2xl  ">
      <img
        className="w-20 h-20 object-cover rounded-full ring-2 ring-green "
        src={profileImg}
        alt="my-profile-img"
      />
      <div>
        <h1 className=" text-lg Mobile:text-[1.8rem] mb-1 font-bold">{name}</h1>
        <p className=" font-bold  text-green text-sm">{address}</p>
      </div>
      <p className=" text-[0.8rem] max-w-[20ch]  Mobile:max-w-full Mobile:text-inherit font-medium">{`"${quotes}"`}</p>
      <ul className=" flex flex-col gap-5 capitalize  w-full ">
        {socialLinks?.map((data, index) => (
          <List key={index} name={data.name} link={data.link} />
        ))}
      </ul>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  profileImg: PropTypes.string,
  quotes: PropTypes.string,
  socialLinks: PropTypes.array,
};
