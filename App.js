import './App.css';
import fa_search from './images/fa_search.png';
import pex from './images/pex.png';
import photoshop from './images/photoshop.png';
import rectangle_11_2 from './images/rectangle_11_2.jpg';
import rectangle_11 from './images/rectangle_11.jpg';
import shape_2_2 from './images/shape_2_2.png';
import shape_2 from './images/shape_2.png';
import {Link} from 'react-scroll'

function App() {
  return (
    <>
  <div className="background">
    <div className="image">
      <div className="col-2">
        <div className="header"  style={{background:"black", position:'fixed', zIndex:"1", marginTop:'-2%', width:"100%", paddingTop:"20px" }}>
          <div className="row-5 group">
            <img
              className="pex"
              src={pex}
              alt=""
              width={41}
              height={20}
            />
            <img
              className="photoshop-website-template"
              src={photoshop}
              alt=""
              width={132}
              height={11}
            />
            <div className="search group">
              <img
                className="fa-search-2"
                src={fa_search}
                alt=""
                width={14}
                height={13}
                title=""
              />
              <p className="text">Search Website</p>
            </div>
            <div className="header-nav">
              <nav className="nav">
                <ul className="nav-list group">
                  <li className='Nav-links'>
                    <p className="nav-item-1">
                    <Link to='About' spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    </p>
                  </li>
                  <li className='Nav-links'>
                    <p className="nav-item-1-2">
                    <Link to='Works' spy={true} smooth={true} offset={50} duration={500}>How It Works</Link>
                    </p>
                  </li>
                  <li className='Nav-links'>
                    <p className="nav-item-1-3">
                    <Link to='Services' spy={true} smooth={true} offset={50} duration={500}>Services</Link>
                    </p>
                  </li>
                  <li className='Nav-links'>
                    <p className="nav-item-1-4">
                    <Link to='FAQ' spy={true} smooth={true} offset={50} duration={500}>FAQ</Link>
                    </p>
                  </li>
                  <li className='Nav-links'>
                    <p className="nav-item-1-5">
                    <Link to='Contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                    </p>
                  </li>
                </ul>
              </nav>
              <div className="rectangle-3" />
            </div>
          </div>
          <div className="highlight" />
        </div>
        <div className="l-constrained-5">
          <div className="text-2">
            Designs your eyeballs
            <br />
            will thank you for
          </div>
          <div className="book-btn">
            <div className="rounded-rectangle-1-holder">
              <div className="text-4">
                <p>Get Started Today</p>
              </div>
            </div>
            <p className="text-5">Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </div>
      </div>
      <div className="features" id="About">
        <div className="highlight-2" />
        <div className="l-unconstrained">
          <div className="l-constrained-6">
            <div className="row match-height group">
              <div className="group-2">
                <p className="text-6">A fantastic heading</p>
                <p className="text-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
              <div className="group-3">
                <p className="text-8">Good day blokes</p>
                <p className="text-9">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="row-2 match-height group">
              <div className="group-4">
                <p className="text-10">Blaz Robar for president</p>
                <p className="text-11">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
              <div className="group-5">
                <p className="text-12">vote for robar</p>
                <p className="text-13">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      className="shape-2"
      src={shape_2_2}
      alt=""
      width={141}
      height={72}
    />
    <div className="pink" id="Works">
      <div className="l-constrained-3">
        <div className="text-14">
          <p className="text-15">Wicked &amp; whack, bang bang boo!</p>
          <p className="text-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </div>
        <div className="book-btn-2">Get Started Today</div>
      </div>
    </div>
    <div className="about group" id="Services">
      <img className="rectangle-11" src={rectangle_11_2} alt="" />
      <p className="text-18">
        <strong className="text-style">A heading is what you need here</strong>
        <br />
        <span className="text-style-2">
          Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
        </span>
        <br />
        <span className="text-style-3">&nbsp;</span>
        <br />
        <span className="text-style-3">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
        </span>
      </p>
    </div>
    <div className="base" id='FAQ'>
      <div className="col">
        <div className="l-constrained-4">
          <div className="text-19">
            <p className="text-20">Experience the rush today</p>
            <div className="text-21">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipisicing elit.
              </p>
              <p className="text-style-4" />
            </div>
          </div>
          <div className="book-btn-3">
            <div className="rounded-rectangle-1-holder-2">
              <div className="text-22">
                <p>Get Started Today</p>
              </div>
            </div>
            <p className="text-23">Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </div>
      </div>
    </div>
    <div className="post_image" id="Contact">
      <div className="post_text">
        <div className="cat">Photography</div>
        <p className="text-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed
        </p>
        <div className="author group">
          <img
            className="shape-2-2"
            src={shape_2}
            alt=""
            width={45}
            height={45}
          />
          <p className="text-25">Blaz Robar, god like web designer</p>
        </div>
      </div>
    </div>
    <div className="about-2 group">
      <img className="rectangle-11-2" src={rectangle_11} alt="" />
      <p className="text-26">
        <strong className="text-style">A heading is what you need here</strong>
        <br />
        <span className="text-style-2">
          Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
        </span>
        <br />
        <span className="text-style-3">&nbsp;</span>
        <br />
        <span className="text-style-3">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
        </span>
      </p>
    </div>
  </div>
  <div className="title group">
    <div className="l-constrained">
      <strong className="text-style">Get in touch</strong>
      <br />
      <span className="text-style-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,{" "}
      </span>
      <span className="text-style-6">
        sed do eiusmod tempor incididunt ut labore et dolore{" "}
      </span>
      <span className="text-style-3">magna aliqua. </span>
      <br />
      <span className="text-style-3">&nbsp;</span>
      <br />
      <a href="mailto:help@yomuma.com" className="text-style-7">
        help@yomuma.com
      </a>
    </div>
    <div className="footer">
      <div className="l-constrained-2">
        psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>
</>
  );
}

export default App;
