import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const navigate = useNavigate();

  function handleEntrarClick() {
    navigate('/login');
  }
    
  return (
    <header className="css-afs6g3 exit-done">
      <div className="css-4dw5e8">
        <figure className="">
          <img
            alt="Zé delivery logo"
            src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=128&q=75"
          ></img>
        </figure>
        <button
          type="button"
          onClick={handleEntrarClick}
          className="css-dwetg5"
        >Entrar
        </button>
      </div>
    </header>
  );
}

export default Header;
