import React from "react";
import "./control-panel.css";

function ControlPanel(props) {
    const { gameStarted, onGameStart, timer1, timer2 } = props;
    const gameStartedClass = gameStarted ? " gameStarted" : "";

    return (
        <section id="panel-control">
            <form className="form">
                <button
                    type="button"
                    id="btPlay"
                    //disabled={selectedLevel === "0"}
                    onClick={onGameStart}
                >
                    {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
                </button>
            </form>
            <div className="form-metadata">
                <dl className={`list-item left${gameStartedClass}`}>
                    <dt>Tempo Jogador1:</dt>
                    <dd id="gameTime1">{timer1}</dd>
                </dl>
                <dl className={`list-item left${gameStartedClass}`}>
                    <dt>Tempo Jogador2:</dt>
                    <dd id="gameTime2">{timer2}</dd>
                </dl>
            </div>
        </section>
    );
}

export default ControlPanel;
