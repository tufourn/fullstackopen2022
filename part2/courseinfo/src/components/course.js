const Header = (props) => {
    return <h3>{props.course}</h3>
}

const Part = ({part}) => {
    return <p>
        {part.name} {part.exercises}
    </p>
}

const Content = ({parts}) => {
    const lines = parts.map((part) => <Part part={part} key={part.id} />)
    return <div>{lines}</div>
}

const Total = ({parts}) => {
    const total = parts.reduce((s,p) => s+p.exercises, 0)
    return <p><b>total of {total} exercises</b></p>
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course