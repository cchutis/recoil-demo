import { useRecoilValue } from "recoil"
import { massiveState } from "../state/atoms"

const BigText = () => {

    const text = useRecoilValue(massiveState)
    return (
        <h1 className="big-text">{text}</h1>
    )
}

export default BigText