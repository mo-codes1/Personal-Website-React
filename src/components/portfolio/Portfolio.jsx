import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="title">
        <span><p>Projects</p></span>
      </div>
      <div className='container'>
        <div className='projectWrapper'>
          <ul className='allProjects'>
          <li className='project' id="sweepstake">
            <div className="projectInfo">
              <h2>Sweepstake</h2>
                <p className="tools">Tools: Ruby on Rails, PostgreSQL, RSpec, CSS, Heroku (back-end)</p>
                <br></br>
                <p>A webapp that allows the user to create a sweepstake from a current football competition ie AFCon. Premier League. </p>
                </div>
              <a className='projectLink' target="_blank" href="https://github.com/mo-codes1/football-sweepstake-generator">
                <figure className="projectGif" id="swepstake">
                  <img src="assets/swepstake.gif" alt="SwepstakeVideo"/> <h5>Sweepstake</h5>
                </figure>
              </a> 
            </li>
            <li className='project' id='acebookProject'>
              <a className='projectLink' target="_blank" href="https://github.com/mo-codes1/Acebook">
                <figure className="projectGif" id="acebook">
                  <img src="assets/acebook.gif" alt="Acebook"/> <h5>Acebook</h5>
                </figure>
              </a> 
              <div className="projectInfo">
                <h2>Acebook</h2>
                <p className="tools">Tools: Rails, RSpec, Capybara, PostgreSQL, Bootstrap CSS, Heroku </p>
                <br></br>
                <p>This is a clone of Facebook, build over the space of a week during Makers Academy. The project allows users to post on a communal wall, like and comment on posts, allows users to remove their own likes and comments and includes a chatroom feature.
                  We used Ruby On Rails as our web framework, and hosted the application on Heroku. 
                  This project features all the CRUD operations. </p>
              </div>
            </li>
            <li className='project' id="blog">
            <div className="projectInfo">
              <h2>Blog Site</h2>
                <p className="tools">Tools: Vanilla JS, Guardian API, CSS </p>
                <br></br>
                <p>Single page webapp that allows the user to create a blog post and attribute a name to that post</p>
                </div>
              <a className='projectLink' target="_blank" href="https://github.com/mo-codes1/React-Blog">
                <figure className="projectGif" id="blogApp">
                  <img src="assets/reactblog.gif" alt="Blog App"/> <h5>Blog Site</h5>
                </figure>
              </a> 
            </li>
            <li className='project' id='bankTechTestSection'>
              <a className='projectLink' target="_blank" href="https://github.com/mo-codes1/bank-tech-test">
                <figure className="projectGif" id="bankTechTest">
                  <img src="assets/bankTechTest.gif" alt="bankTechTest"/> <h5>Bank Tech Test</h5>
                </figure>
              </a> 
              <div className="projectInfo">
                <br></br>
                <h2>Bank Tech Test</h2>
                <p className="tools">Tools: Vanilla JS, Node JS, Console, Jest</p>
                <br></br>
                <p>This is an example of a coding test, built in Javascript and tested using the Jest testing framework. 
                  A user can add multiple transactions (both withdraws and deposits). A user can also
                  request for a statement of their previous transactions on the account.</p>
              </div>
            </li>
            <li className='project' id="weather">
            <div className="projectInfo">
              <h2>Weather App</h2>
                <p className="tools">Tools: Vanilla JS, Weather API, CSS </p>
                <br></br>
                <p>An app that lets you see what the weather is in a city of your choosing by typing it into the search bar. Used an external API</p>
                </div>
              <a className='projectLink' target="_blank" href="https://github.com/mo-codes1/Weather-App">
                <figure className="projectGif" id="weatherApp">
                  <img src="assets/weather.gif" alt="Weather App"/> <h5>Weather App</h5>
                </figure>
              </a> 
            </li>
            <li className='project' id='bankTechTestSection'>
              <a className='projectLink' target="_blank" href="https://github.com/mo-codes1/bank-tech-test">
                <figure className="projectGif" id="bankTechTest">
                  <img src="assets/noughtsandcrosses.gif" alt="noughtsandcrosses"/> <h5>Noughts and Crosses</h5>
                </figure>
              </a> 
              <div className="projectInfo">
                <br></br>
                <h2>Noughts and Crosses</h2>
                <p className="tools">Tools: Vanilla JS, Node JS, Console, Jest</p>
                <br></br>
                <p>Classic game of noughts and crosses built using HTML, CSS and JavaScript. Two player game that can end with a win, loss or a draw
                </p>
              </div>
            </li>
            
          </ul>
      </div>
      </div>
      </div>
  )
}