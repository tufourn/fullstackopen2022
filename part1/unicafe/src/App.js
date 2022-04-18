import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  if (!all) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tr>
          <td> good </td>
          <td> {props.good} </td>
        </tr>
        <tr>
          <td> neutral </td>
          <td> {props.neutral} </td>
        </tr>
        <tr>
          <td> bad </td>
          <td> {props.bad} </td>
        </tr>
        <tr>
          <td> all </td>
          <td> {all} </td>
        </tr>
        <tr>
          <td> average </td>
          <td> {Math.round((props.good - props.bad) / all * 10) / 10} </td>
        </tr>
        <tr>
          <td> positive </td>
          <td> {Math.round((props.good / all * 10)) /10} % </td>
        </tr>
      </table>

      {/* <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(props.good - props.bad) / all} />
      <StatisticLine text="positive" value={props.good / all * 100} /> */}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text="good"></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button handleClick={() => setBad(bad + 1)} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App