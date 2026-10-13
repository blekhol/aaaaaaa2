import { useState } from "react"

function random() {
    return Math.floor(Math.random() * 256);
}

export default function Color() {
    const [color, setColor] = useState("red");
    
    return (
        <>
            <div style={{
                backgroundColor: `${color}`,
                width: "100vw",
                height: "100vh"
            }}>
                <button onClick={
                    () => {
                        setColor(`rgb(${random()},${random()},${random()})`);
                    }
                }
                >
                    Új szín generálása
                </button>
            </div>
        </>
    )
}