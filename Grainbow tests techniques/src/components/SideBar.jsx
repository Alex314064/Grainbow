import logo from "../assets/logo.png";

function SideBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={logo} className="logo" title="{{site_name}}" />
          </li>
          <li className="nav-item"> Agriculteurs</li>
          <li className="nav-item"> Céréales</li>
          <li className="nav-item"> Apports</li>
        </ul>
      </nav>
    </>
  );
}
export default SideBar;
