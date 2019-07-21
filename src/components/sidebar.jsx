import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/portfolio-image-02.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Chelsea Boling</a></h1>
              <span className="email"><i className="icon-mail"></i> cmboling48@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  {/* <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li> */}
                  <br />
                  <p>
                    <small>
                      I'm currently under a contract with <br /> Walt Disney Studios Technology. <br />
                      <br />
                      What do I do there? <br />
                      I'm a <b>Production Support Engineer</b>. <br />
                      <b>Troubleshooter/Debugger</b> First<br />
                      <b>Developer</b> When Needed <br />
                      Always a <b>Data Janitor </b> <br />
                    </small>
                  </p>

                  <p>
                    <small>
                      What do I like to do? <br />
                      I love playing around with data and making it readable.
                      I enjoy learning about systems and strenghtening them.
                      I'm starting to have a knack for software orchestration.
                      </small>
                  </p>
                  <p>
                    <small>
                      I'm into it all. I like helping people and making them feel better about the software that they use.
                      </small>
                  </p>
                  <br />
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                {/* Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> */}
                Credits: <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}