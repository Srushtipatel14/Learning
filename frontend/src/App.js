function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px", gap: "20px" }}>
          <button style={{ borderStyle: "none", padding: "10px", borderRadius: "10px", backgroundColor: "lightGray" }}>Increment</button>
          <button style={{ borderStyle: "none", padding: "10px", borderRadius: "10px", backgroundColor: "lightGray" }}>Decrement</button>
        </div>
        <div>
          <h1>Count : 1</h1>
        </div>
      </div>
    </div>
  )
}

export default App;