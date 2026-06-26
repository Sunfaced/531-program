import { ProgramTable } from "./components/ProgramTable.js";
import { TargetInput } from "./components/TargetInput.js";
import { useProgramState } from "./hooks/useProgramState.js";
import "./index.css";

function App() {
  const { state, setTarget1RM } = useProgramState();

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏋️ 5/3/1</h1>
      </header>

      <TargetInput value={state.target1RM} onChange={setTarget1RM} />

      {state.target1RM ? (
        <>
          <div
            style={{
              background: "var(--bg-card)",
              padding: "8px 12px",
              borderRadius: "8px",
              marginBottom: "12px",
              fontSize: "13px",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              1ПМ:{" "}
              <strong style={{ color: "var(--accent)" }}>
                {state.target1RM} кг
              </strong>
            </span>
            <span style={{ fontSize: "11px", opacity: 0.6 }}>
              веса округлены вверх до 2.5 кг
            </span>
          </div>
          <ProgramTable />
        </>
      ) : (
        <div className="setup-prompt">
          <p>Установите целевой 1ПМ, чтобы начать</p>
        </div>
      )}
    </div>
  );
}

export default App;
