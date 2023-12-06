function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">
            <img src="img/logo1.png"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collaps navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#links" class="nav-link">
                  Ссылки
                </a>
              </li>
              <li class="nav-item">
                <a href="#form" class="nav-link">
                  Форма
                </a>
              </li>
              <li class="nav-item">
                <a href="#table" class="nav-link">
                  Таблица
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
