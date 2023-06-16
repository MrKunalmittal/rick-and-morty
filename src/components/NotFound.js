import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <section className='notFound'>
      <Helmet>
        <title>404 Not found</title>
      </Helmet>
      <div className='content'>
        <h1 className='notfound-message'>Oooops!</h1>
        <h1 className='notfound-message'>404 Page not found</h1>
        <p >This is dead end of universe!</p>
        <img src='https://media2.giphy.com/media/xTiTnF5Wuoow9Rbckw/giphy.gif?cid=ecf05e47knjgywano7djzlzc2bud0iyzjyte0js6b43q5vf4&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
        <Link to="/">
          <input type='button' className="returnBtn" value="Return home" />
        </Link >
      </div>
    </section>
  )
}

export default NotFound;