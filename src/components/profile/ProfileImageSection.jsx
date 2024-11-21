import { MdEdit } from "react-icons/md";

const ProfileImageSection = ({ profileImage, handleEdit }) => {
  return (
    <div className="lg:pt-10 lg:pr-14 xl:border-r-2 border-primary relative">
      <div>
        <img
          src={profileImage}
          alt="profile"
          className="rounded-full w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] border-4 border-primary shadow-lg "
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default ProfileImageSection;
