function Article() {
    const[count, setCount] = useState(0)
    const [age,setAge] = useState(0)
    const [name,setName] = useState("")

    const handleIncrement = () => {
        setCount(count + 1)
        console.log(count)
    }
    return (
        <div>
            <h1>Article</h1>
            <p>This is an article about React.</p>
            <h2>Counter</h2>
            <button onClick={handleIncrement}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}

export default Article