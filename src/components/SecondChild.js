import React, { useContext } from 'react';
import { NameContext } from '../App';
import { LeetCode } from "./LeetCode";

export const SecondChild = () => {
    const name = useContext(NameContext);
    console.log(name);
    return (
        <div>
            <h2>Hello from second child { name }</h2>
            <LeetCode/>
        </div>
    );
};