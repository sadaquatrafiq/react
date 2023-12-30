const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <button>Signup</button>
      </nav>
    </>
  );
};
const Hero = () => {
  return (
    <>
      <div class="hero-image">
        <div class="hero-text">
          <h1>
            Generate more leads woth a <br />
            professional landing page!
          </h1>
          <div className="hero-text1">
            <input type="text" placeholder="Enter Email" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-1">
          <img src="src/assets/component/images/img/first.PNG" alt="" />
          <h1>Fully Responsive</h1>
          <p>
            This Theme will look great on <br />
            any device,no matter the size!
          </p>
        </div>
        <div className="card-1">
          <img src="src/assets/component/images/img/second.PNG" alt="" />
          <h1>Fully Responsive</h1>
          <p>
            This Theme will look great on <br />
            any device,no matter the size!
          </p>
        </div>
        <div className="card-1">
          <img src="src/assets/component/images/img/third.PNG" alt="" />
          <h1>Fully Responsive</h1>
          <p>
            This Theme will look great on <br />
            any device,no matter the size!
          </p>
        </div>
      </div>
    </>
  );
};

const Brand = () => {
  return (
    <>
      <div className="first">
        <div className="first-para">
          <h3>Fully Responsive Design</h3>
          <p>
            When you use a theme created by start Bootstrap,you know that the
            theme will look great on any device, wheather its a phone,tablet,or
            desktopthe page will behave responsively!
          </p>
        </div>
        <div className="second-para">
          <img src="src/assets/component/images/img/bg-showcase-1.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

const SecondBrand = () => {
  return (
    <>
      <div className="first">
        <div className="second1-para">
          <img src="src/assets/component/images/img/bg-showcase-2.jpg" alt="" />
        </div>
        <div className="first-para">
          <h3>Fully Responsive</h3>
          <p>
            Newly improved,and full of great utility classes,Bootstrap 5 is
            leading the way in mobile responsive web development! All of the
            themes on Start Bootstrap are now using Bootstrap 5!
          </p>
        </div>
      </div>
    </>
  );
};

const ThirdBrand = () => {
  return (
    <>
      <div className="first">
        <div className="first-para">
          <h3>Fully Responsive Design</h3>
          <p>
            When you use a theme created by start Bootstrap,you know that the
            theme will look great on any device, wheather its a phone,tablet,or
            desktopthe page will behave responsively!
          </p>
        </div>
        <div className="second-para">
          <img src="src/assets/component/images/img/bg-showcase-3.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
const Fourth = () => {
  return (
    <>
      <div className="card1">
        <div className="cards">
          <img
            src="src/assets/component/images/img/testimonials-1.jpg"
            alt=""
          />
          <h1>Margaret E.</h1>
          <p>"This is fantastic so much guys!"</p>
        </div>
        <div className="cards">
          <img
            src="src/assets/component/images/img/testimonials-2.jpg"
            alt=""
          />
          <h1>Fred S.</h1>
          <p>
            "Bootstrap is amazing I've been using it <br />
            to create lots of super nice landing pages."
          </p>
        </div>
        <div className="cards">
          <img
            src="src/assets/component/images/img/testimonials-3.jpg"
            alt=""
          />
          <h1>Sarah W.</h1>
          <p>
            "Thanks so much for making these free <br />
            resources available to us!"
          </p>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div class="hero-image ">
        <div class="hero-text">
          <h1 style={{ fontSize: "40px" }}>
            Ready To get Started?Sign up now!
          </h1>
          <div className="hero-text1">
            <input type="text" placeholder="Enter Email" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
const Link = () => {
  return (
    <>
      <div className="final">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export {
  Navbar,
  Hero,
  Card,
  Brand,
  SecondBrand,
  ThirdBrand,
  Fourth,
  Footer,
  Link,
};
