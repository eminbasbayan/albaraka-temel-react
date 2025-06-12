
import "./Header.css"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 header">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">MyApp</a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" href="/">Ana Sayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/hakkinda">Hakkında</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/iletisim">İletişim</a>
            </li>
            <li className="nav-item ms-lg-3">
              <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart3"></i> Sepet
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                  <span className="visually-hidden">sepet öğeleri</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
