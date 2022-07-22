function Stories() {
  <div class="stories">
    <h2 class="tittle-stories">Stories</h2>
    <ul class="stories-sqare">
      <a class="link-stories" href="#">
        <li class="frame-storie">
          <div class="img-storie1 img-storie">
            <img
              class="profile-photo"
              src="./assets/stories/profile 1.jpg"
              alt="foto de perfil de un usuario"
            />
            <h3 class="profile-name">Kierra Gentry</h3>
          </div>
          <div class="storie-borde"></div>
        </li>
      </a>
      <a class="link-stories" href="#">
        <li class="frame-storie">
          <div class="img-storie2 img-storie">
            <img
              class="profile-photo"
              src="./assets/stories/profile 2.jpg"
              alt="foto de perfil de un usuario"
            />
            <h3 class="profile-name">Bradyn Krammer</h3>
          </div>
          <div class="storie-borde"></div>
        </li>
      </a>
      <a class="link-stories" href="#">
        <li class="frame-storie">
          <div class="img-storie3 img-storie">
            <img
              class="profile-photo"
              src="./assets/stories/profile 3.jpg"
              alt="foto de perfil de un usuario"
            />
            <h3 class="profile-name">Pierre Cox</h3>
          </div>
          <div class="storie-borde"></div>
        </li>
      </a>
    </ul>
  </div>;
}
function SidebarRigth() {
  return (
    <div class="sidebar-right">
      <div class="notice-section">
        <div class="notice-single">
          <article class="notice-article notice-article1">
            <h3 class="notice-tittle">Bootcamp X</h3>
            <p class="notice-text">Learn working in a real environment</p>
            <a
              class="notice-button"
              href="https://twitter.com/condef5"
              target="_blank"
            >
              Explore All
            </a>
          </article>
          <footer class="notice-footer">
            <div class="notice-avatars">
              <img
                class="avatar avatar1"
                src="https://my-daily-bootcamp-rojo.netlify.app/asstes-notice/Notice1-1profile.jpg"
                alt="photo 1"
              />
              <img
                class="avatar avatar2"
                src="https://my-daily-bootcamp-rojo.netlify.app/asstes-notice/Notice1-2profile.jpg"
                alt="photo 2"
              />
              <img
                class="avatar avatar3"
                src="https://my-daily-bootcamp-rojo.netlify.app/asstes-notice/Notice1-3profile.jpg"
                alt="photo 3"
              />
            </div>
            <span class="participants-text">12 participants</span>
          </footer>
        </div>
        <div class="notice-single">
          <article class="notice-article notice-article2">
            <h3 class="notice-tittle">Mali</h3>
            <p class="notice-text">Join events near you for free</p>
            <a class="notice-button" href="https://mali.pe/" target="_blank">
              Explore All
            </a>
          </article>
          <footer class="notice-footer">
            <div class="notice-avatars">
              <img
                class="avatar avatar1"
                src="https://my-daily-bootcamp-rojo.netlify.app/asstes-notice/Notice2-1profile.jpg"
                alt="photo 1"
              />
              <img
                class="avatar avatar2"
                src="https://my-daily-bootcamp-rojo.netlify.app/asstes-notice/Notice2-2profile.jpg"
                alt="photo 2"
              />
              <img
                class="avatar avatar3"
                src="https://my-daily-bootcamp-rojo.netlify.app/asstes-notice/Notice2-3profile.jpg"
                alt="photo 3"
              />
            </div>
            <span class="participants-text">18 participants</span>
          </footer>
        </div>
      </div>

      <div class="Follow-P">
        <h3>Who to Follow</h3>

        <div class="follow">
          <div class="follow-date">
            <div class="info">
              <a
                class="link-follow"
                href="https://twitter.com/condef5"
                target="_blank"
              >
                <img
                  src="https://my-daily-bootcamp-rojo.netlify.app/img/Ellipse%2031.jpg"
                  alt="foto de perfil de un usuario"
                  class="instructor-profile"
                />
                <p>@condef5</p>
                <img
                  src="https://my-daily-bootcamp-rojo.netlify.app/img/Vector.jpg"
                  alt="check"
                />
              </a>
            </div>
            <button class="follow-1">
              <b>Follow</b>
            </button>
          </div>

          <div class="follow-date">
            <div class="info">
              <a
                class="link-follow"
                href="https://twitter.com/yummta?lang=es"
                target="_blank"
              >
                <img
                  src="https://my-daily-bootcamp-rojo.netlify.app/img/Ellipse%2032.jpg"
                  alt="Paul Portillo"
                  class="instructor-profile"
                />
                <p>@yummta</p>
                <img
                  src="https://my-daily-bootcamp-rojo.netlify.app/img/Vector.jpg"
                  alt="check"
                />
              </a>
            </div>
            <button class="follow-1">
              <b>Follow</b>
            </button>
          </div>
        </div>
      </div>
      <div class="footer">Bootcamp X © 2022</div>
    </div>
  );
}
export default SidebarRigth;
