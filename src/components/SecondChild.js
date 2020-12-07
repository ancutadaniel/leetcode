import React, { useContext } from 'react';
import { PassPropsSecondChild } from '../App';
import { LeetCode } from "./LeetCode";

export const SecondChild = () => {
    const {xoState,name} = useContext(PassPropsSecondChild);

    return (
        <div>
            <h2>Hello from second child {name}</h2>
            <LeetCode />
        </div>
    );
};