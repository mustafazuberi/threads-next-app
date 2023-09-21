"use client";
import Image from "next/image";
import { signOut, signIn } from "next-auth/react";

type Props = {
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
};

const UserProfileImage = ({ user }: Props) => {
  if (!user) {
    return <button onClick={() => signIn()}>Log in</button>;
  }

  return (
    <button className="w-14 h-14 rounded-full" onClick={() => signOut()}>
      <Image
        src={user.image!}
        alt="User Avatar"
        width={56}
        height={56}
        className="rounded-[50%]"
      />
    </button>
  );
};

export default UserProfileImage;
