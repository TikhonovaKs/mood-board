import "./Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../Icons/logo-dark.svg";
import { ReactComponent as FindIcon } from "../../Icons/find-rectangle-dark.svg";
import { ReactComponent as AccountIcon } from "../../Icons/profile-dark.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <Link to="/search">
            <LogoIcon className="header__icon header__icon--logo" />
          </Link>
        </div>

        <div className="header__right">
          <Link to="/myboard">
            <AccountIcon className="header__icon header__icon--account" />
          </Link>

          <Link to="/search">
            <FindIcon className="header__icon header__icon--find" />
          </Link>
        </div>
      </div>
    </header>
  );
}
