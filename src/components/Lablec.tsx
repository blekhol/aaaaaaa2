import type { LablecProps } from "../types/LablecProps";

export default function Lablec(props: LablecProps) {
    return (
        <>
            <footer>
                <p>{props.feladat}.feladat - {props.cim}</p>
            </footer>
        </>
    )
}