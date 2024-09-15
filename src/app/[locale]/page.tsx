import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
export default function Home() {
  return (
    <div className="flex gap-10 justify-center items-center my-24 mx-auto">
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
