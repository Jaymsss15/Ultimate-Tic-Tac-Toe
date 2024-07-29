import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./assets/styles/App.css";

import { ControlPanel, Footer, Header, BigBoard } from "./components";
import { TIMEOUTGAME } from "./constants";
let timerId1 = undefined;
let timerId2 = undefined;

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [timer1, setTimer1] = useState(TIMEOUTGAME);
    const [timer2, setTimer2] = useState(TIMEOUTGAME);
    const [Jogador, setJogador] = useState(true);
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    const [vencedor, setVencedor] = useState(false);

    /**
     * When the game starts
     */

    const handleGameStart = () => {
        if (gameStarted) {
            console.log("Termina Jogo");
            setGameStarted(false);
        } else {
            console.log("Inicia Jogo");
            setGameStarted(true);
            setJogador(true);
            setVencedor(false);
        }
    };

    const handlePlayer1NameChange = (nome) => {
        setPlayer1Name(nome.target.value);
    };

    const handlePlayer2NameChange = (nome) => {
        setPlayer2Name(nome.target.value);
    };

    function handleClick() {
        setJogador(!Jogador);
    }

    function handleVencedor() {
        setVencedor(true);
    }

    useEffect(() => {
        if (gameStarted && !vencedor) {
            if (Jogador) {
                timerId1 = setInterval(() => {
                    let nextTimer1;

                    setTimer1((previousState) => {
                        if (previousState > 0) {
                            nextTimer1 = previousState - 1;
                            return nextTimer1;
                        } else {
                            nextTimer1 = 0;
                            return nextTimer1;
                        }
                    });
                }, 1000);
            } else {
                timerId2 = setInterval(() => {
                    let nextTimer2;

                    setTimer2((previousState2) => {
                        if (previousState2 > 0) {
                            nextTimer2 = previousState2 - 1;
                            return nextTimer2;
                        } else {
                            nextTimer2 = 0;
                            return nextTimer2;
                        }
                    });
                }, 1000);
            }
        } else if (timer1 !== TIMEOUTGAME || timer2 != TIMEOUTGAME) {
            setTimer1(TIMEOUTGAME);
            setTimer2(TIMEOUTGAME);
        }

        return () => {
            if (timerId1) {
                clearInterval(timerId1);
            }
            if (timerId2) {
                clearInterval(timerId2);
            }
        };
    }, [gameStarted, Jogador, vencedor]);

    const gameStartedClass = gameStarted ? " gameStarted" : "";

    return (
        <div id="container">
            <Header />
            <main className="main-content">
                <ControlPanel
                    gameStarted={gameStarted}
                    onGameStart={handleGameStart}
                    timer1={timer1}
                    timer2={timer2}
                />
                {!gameStarted ? (
                    <div>
                        <p>
                            <label>
                                Nome do Jogador 1:
                                <input
                                    type="text"
                                    value={player1Name}
                                    onChange={handlePlayer1NameChange}
                                />
                            </label>
                        </p>
                        <p>
                            <label className="nome">
                                Nome do Jogador 2:
                                <input
                                    type="text"
                                    value={player2Name}
                                    onChange={handlePlayer2NameChange}
                                />
                            </label>
                        </p>
                    </div>
                ) : null}
                {gameStarted ? (
                    <dl className={`list-item left${gameStartedClass}`}>
                        <div className="jogo">
                            {timer1 === 0 ? (
                                <p>Ganhou Jogador {player2Name}</p>
                            ) : timer2 === 0 ? (
                                <p>Ganhou Jogador {player1Name}</p>
                            ) : (
                                <BigBoard
                                    startGame={gameStarted}
                                    nJog={handleClick}
                                    player1Name={player1Name}
                                    player2Name={player2Name}
                                    apanhaVencedor={handleVencedor}
                                />
                            )}
                        </div>
                    </dl>
                ) : null}
            </main>
            <Footer />
        </div>
    );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida
// export default function App() {
