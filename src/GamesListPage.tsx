import {Head} from "./Head";
import "./qv-card.css"

export function GameListPage() {
    return (
        <>
            {Head('games')}
            <div className="game-card">
                <div className="card-header">
                    <h2>Quantum Voxel: Recomputed</h2>
                </div>
                <div className="card-body">
                    <p>Quantum Voxel is being rewritten, and there's currently an in-development version on the Web! The
                        game is still in development, and your feedback will appreciated!</p>
                    <p><b>Current build:</b> In-Development</p>
                </div>
                <div className="card-footer">
                    <a href="https://playqv.ultreon.dev" className="test-button">Test it out</a>
                </div>
            </div>
        </>
    )
}