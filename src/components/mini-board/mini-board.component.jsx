import React, { useState } from "react";
import Card from "../card/card.component";
import { calculateWinner } from "../../helpers";

function MiniBoard({
    onWinnerFlag,
    letra,
    Jogador,
    onTabClick,
    indiceAtualiza,
}) {
    const [cards, setCards] = useState(Array(9).fill(null));
    const [JogadorVencedor, setJogadorVencedor] = useState(true);
    const winner = calculateWinner(cards);

    const atualizarIndicefilho = (i) => {
        indiceAtualiza(i); // Chama a função de callback no componente pai
    };

    function handleClick(i) {
        atualizarIndicefilho(i);
        if (calculateWinner(cards) || cards[i]) {
            return;
        }
        const nextSquares = cards.slice();
        if (Jogador) {
            nextSquares[i] = "X";
            setJogadorVencedor(false);
        } else {
            nextSquares[i] = "O";
            setJogadorVencedor(true);
        }
        setCards(nextSquares);
        onTabClick(true);
    }

    let className = "square"; // Define a classe inicial como "square"

    if (winner) {
        onWinnerFlag(true);
        if (JogadorVencedor) {
            className = "squareAzul"; // Atualiza a classe para "squareVermelho"
            letra = false;
        } else {
            className = "squareVermelho"; // Atualiza a classe para "squareAzul"
            letra = true;
        }
    }

    return (
        <>
            <div className="mini-board">
                <div className="board-row">
                    <Card
                        value={cards[0]}
                        onSquareClick={() => handleClick(0)}
                        cena={className}
                    />
                    <Card
                        value={cards[1]}
                        onSquareClick={() => handleClick(1)}
                        cena={className}
                    />
                    <Card
                        value={cards[2]}
                        onSquareClick={() => handleClick(2)}
                        cena={className}
                    />
                </div>
                <div className="board-row">
                    <Card
                        value={cards[3]}
                        onSquareClick={() => handleClick(3)}
                        cena={className}
                    />
                    <Card
                        value={cards[4]}
                        onSquareClick={() => handleClick(4)}
                        cena={className}
                    />
                    <Card
                        value={cards[5]}
                        onSquareClick={() => handleClick(5)}
                        cena={className}
                    />
                </div>
                <div className="board-row">
                    <Card
                        value={cards[6]}
                        onSquareClick={() => handleClick(6)}
                        cena={className}
                    />
                    <Card
                        value={cards[7]}
                        onSquareClick={() => handleClick(7)}
                        cena={className}
                    />
                    <Card
                        value={cards[8]}
                        onSquareClick={() => handleClick(8)}
                        cena={className}
                    />
                </div>
            </div>
        </>
    );
}

export default MiniBoard;
