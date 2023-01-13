import { ProfileBanner } from "./ProfileBanner";
import { SubProfile } from "./SubProfile";
import Link from "next/link";

export const ProfilePane = ({ data }) => {
  return (
    <div className="w-[350px] h-max flex flex-col justify-start gap-4">
      <ProfileBanner name={data.displayName} />

      <SubProfile label="Display Name">{data.displayName}</SubProfile>
      <SubProfile label="Full Name">{`${data.firstName} ${data.lastName}`}</SubProfile>
      <SubProfile label="Student ID">{data.ID}</SubProfile>
      <SubProfile label="Email Address">{data.email}</SubProfile>
      <SubProfile label="Social Media Accounts">
        <Link href="" className="underline">
          Facebook
        </Link>
        <br />
        <Link href="" className="underline">
          Youtube
        </Link>
      </SubProfile>
      <button className="w-fit rounded-full bg-[#c3dce3] hover:bg-[#a8d8e5] px-5 py-2 text-cyan-700 text-sm font-bold">
        Edit Profile
      </button>
    </div>
  );
};