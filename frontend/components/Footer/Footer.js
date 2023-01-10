import { FooterList } from "./FooterList";
import { FooterIcon } from "./FooterIcon";
import { FooterCopyright } from "./FooterCopyright";

import CleverseLogo from "../../public/cleverse-logo.png";
import ThincLogo from "../../public/thinc-logo.png";

export const Footer = () => {
  return (
    <footer className="h-40 px-40 py-8 bg-stone-100 font-semibold text-stone-500">
      <div className="flex justify-between ">
        <FooterList />

        <div className="flex ">
          <FooterIcon src={CleverseLogo} name="Cleverse" href="#" />
          <FooterIcon src={ThincLogo} name="Thinc." href="#" />
        </div>
      </div>

      {/* grey line */}
      <div className="h-px bg-stone-300 my-2"></div>

      <FooterCopyright />
    </footer>
  );
};
