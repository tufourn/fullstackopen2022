import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const GetRandomInt = (max) => {
  const rand = Math.floor(Math.random() * max)
  //console.log("random number", rand)
  return rand
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [point, setPoint] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...point]
    copy[selected] += 1
    setPoint(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {point[selected]} votes</p>
      <Button handleClick={() => handleVote()} text="vote" />
      <Button handleClick={() => setSelected(GetRandomInt(anecdotes.length))} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[point.indexOf(Math.max(...point))]}</p>
      <p>has {Math.max(...point)} votes</p>
    </div>
  )
}

export default App