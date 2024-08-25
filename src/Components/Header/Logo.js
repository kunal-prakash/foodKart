import logoImage from "../../../public/images/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="foodkart Logo" height="50px" />
    </div>
  );
}
