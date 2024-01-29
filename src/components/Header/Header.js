import "./Header.css";
import { ReactComponent as LogoDark } from "../../Icons/logo-dark.svg";
import { ReactComponent as FindRectangleDark } from "../../Icons/find-rectangle-dark.svg";
import { ReactComponent as AccountDark } from "../../Icons/profile-dark.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <LogoDark className="header__icon" />
        </div>
        <div className="header__right">
          <AccountDark className="header__icon " />
          <FindRectangleDark className="header__icon" />
        </div>
      </div>
    </header>
  );
}
