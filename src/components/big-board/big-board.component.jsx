import React, { useState, useEffect } from "react";
import "./big-board.css";
import { calculateWinner } from "../../helpers";
import MiniBoard from "../mini-board/mini-board.component";

function BigBoard({
    startGame,
    nJog,
    player1Name,
    player2Name,
    apanhaVencedor,
}) {
    const [Finalsquares, setSquares] = useState(Array(9).fill(null)); //Tabuleiro Final
    const winnerF = calculateWinner(Finalsquares);
    const [xIsNext, setXIsNext] = useState(true);
    const [indice, setIndice] = useState(0);

    const atualizarIndice = (novoIndice) => {
        //FinalSquare ---> ordenado por linhas
        //novoIndice ---> ordenado por colunas
        //setIndice ---> colunas + 1
        if (Finalsquares[0] !== null && novoIndice === 0) {
            setIndice(1);
        } else if (Finalsquares[1] !== null && novoIndice === 3) {
            setIndice(4);
        } else if (Finalsquares[2] !== null && novoIndice === 6) {
            setIndice(7);
        } else if (Finalsquares[3] !== null && novoIndice === 1) {
            setIndice(2);
        } else if (Finalsquares[4] !== null && novoIndice === 4) {
            setIndice(5);
        } else if (Finalsquares[5] !== null && novoIndice === 7) {
            setIndice(8);
        } else if (Finalsquares[6] !== null && novoIndice === 2) {
            setIndice(3);
        } else if (Finalsquares[7] !== null && novoIndice === 5) {
            setIndice(6);
        } else if (Finalsquares[8] !== null && novoIndice === 8) {
            setIndice(0);
        } else {
            setIndice(novoIndice);
        }
    };

    let status;
    let board = "board";

    const newSquares = [...Finalsquares]; // Cria uma cópia do array Finalsquares

    function handleWinnerFlag(i, letra) {
        if (xIsNext === false) {
            letra = "X";
        } else {
            letra = "O";
        }

        if (Finalsquares[i] === null) {
            newSquares[i] = letra; // Atualiza o valor no índice especificado
            setSquares(newSquares);
            //console.log(Finalsquares);
        }
        //let flag = indice + 1;
        atualizarIndice(indice);
    }

    function handleClick() {
        setXIsNext(!xIsNext);
        nJog(true);
        console.log(indice);
        console.log(Finalsquares);
    }

    if (winnerF) {
        if (!xIsNext) {
            status = "Vencedor: " + player1Name;
            board = "boardF";
            apanhaVencedor(true);
        } else {
            status = "Vencedor: " + player2Name;
            board = "boardF";
        }
    } else {
        if (xIsNext) {
            status = player1Name + " a jogar";
        } else {
            status = player2Name + " a jogar";
        }
    }

    return (
        <>
            <div className={board}>
                <div className="status">{status}</div>
                <div className="big-board-row">
                    <div
                        className={indice === 0 ? "desbloqueado" : "bloqueado"}
                        id={0}
                    >
                        <MiniBoard
                            value={Finalsquares[0]}
                            onWinnerFlag={(letra) => handleWinnerFlag(0, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                    <div
                        className={indice === 3 ? "desbloqueado" : "bloqueado"}
                        id={1}
                    >
                        <MiniBoard
                            value={Finalsquares[1]}
                            onWinnerFlag={(letra) => handleWinnerFlag(1, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                    <div
                        className={indice === 6 ? "desbloqueado" : "bloqueado"}
                        id={2}
                    >
                        <MiniBoard
                            value={Finalsquares[2]}
                            onWinnerFlag={(letra) => handleWinnerFlag(2, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                </div>
                <div className="big-board-row">
                    <div
                        className={indice === 1 ? "desbloqueado" : "bloqueado"}
                        id={3}
                    >
                        <MiniBoard
                            value={Finalsquares[3]}
                            onWinnerFlag={(letra) => handleWinnerFlag(3, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                    <div
                        className={indice === 4 ? "desbloqueado" : "bloqueado"}
                        id={4}
                    >
                        <MiniBoard
                            value={Finalsquares[4]}
                            onWinnerFlag={(letra) => handleWinnerFlag(4, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                    <div
                        className={indice === 7 ? "desbloqueado" : "bloqueado"}
                        id={5}
                    >
                        <MiniBoard
                            value={Finalsquares[5]}
                            onWinnerFlag={(letra) => handleWinnerFlag(5, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                </div>
                <div className="big-board-row">
                    <div
                        className={indice === 2 ? "desbloqueado" : "bloqueado"}
                        id={6}
                    >
                        <MiniBoard
                            value={Finalsquares[6]}
                            onWinnerFlag={(letra) => handleWinnerFlag(6, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                    <div
                        className={indice === 5 ? "desbloqueado" : "bloqueado"}
                        id={7}
                    >
                        <MiniBoard
                            value={Finalsquares[7]}
                            onWinnerFlag={(letra) => handleWinnerFlag(7, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                    <div
                        className={indice === 8 ? "desbloqueado" : "bloqueado"}
                        id={8}
                    >
                        <MiniBoard
                            value={Finalsquares[8]}
                            onWinnerFlag={(letra) => handleWinnerFlag(8, letra)}
                            indiceAtualiza={atualizarIndice}
                            Jogador={xIsNext}
                            onTabClick={handleClick}
                            LimpaArray={startGame}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigBoard;
