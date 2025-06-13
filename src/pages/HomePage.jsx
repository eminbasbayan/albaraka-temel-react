import BackwardCounter from "../components/Counter/BackwardCounter"
import ForwardCounter from "../components/Counter/ForwardCounter"
import Header from "../components/Layout/Header"
import useCounter from "../hooks/useCounter"

const HomePage = () => {
  const forwardCount = useCounter();
  const backwardCount = useCounter(false);
  return (
    <div className='home-page'>
        <h1>Home Page</h1>
        <br />
        <p className="display-3">Yeni Count Hook: {forwardCount}</p>
        <p className="display-3">Yeni Count Hook: {backwardCount}</p>
        <br />
    </div>
  )
}

export default HomePage