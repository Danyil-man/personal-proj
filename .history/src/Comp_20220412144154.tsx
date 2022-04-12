import React from "react";
import { FC } from "react";

type CompType = {
    num: number
}

const Comp: FC<CompType> = ({ num }) => {
    return (
        <div>
            age {num}
        </div>
    )
}

export default Comp