import CodeCell from './components/CodeCell'

function App(): React.JSX.Element {
  return (
    <>
      <h1>Inline Code Creator</h1>
      <p>Write Python, click Run, and see the output right beneath it.</p>
      <CodeCell />
    </>
  )
}

export default App
