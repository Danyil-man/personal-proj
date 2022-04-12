import React from "react";
import { FC } from "react";

type CompType = {
    name: string
}

const Comp: FC<CompType> = ({ name }) => {
    return (
        <div>
            my name is {name}
        </div>
    )
}

export default Comp