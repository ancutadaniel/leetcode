import React, { useEffect, useState } from 'react';


export const LeetCode = () => {
    const [state, setState] = useState([]);
    //Max Consecutive Ones
    const findMaxConsecutiveOnes = (nums) => {
        let count = 0;
        let maxCount = 0;

        nums.forEach(val => {
            if (val === 1) {
                count++
            } else {
                count = 0;
            }
            if (maxCount < count) {
                maxCount = count
            }
        })
        return (maxCount);
    };
    findMaxConsecutiveOnes([1, 1]);

    //--------------------------------------------------------
    // Find Numbers with Even Number of Digits
    const findNumbers = (nums) => {
        let count = 0;
        if (nums.length === null) return;

        for (let i = 0; i < nums.length; i++) {
            if (`${nums[i]}`.length % 2 === 0) {
                count++
            }
        }
        return count;
    };
    findNumbers([12, 345, 2, 6, 7896])

    //--------------------------------------------------------
    // Squares of a Sorted Array
    const sortedSquares = (nums) => {
        let newArr = [];
        nums.forEach(val => {
            newArr.push(Math.pow(val, 2));
        })

        return newArr.sort((a, b) => a - b)
    };

    const sortedSquaresMap = (nums) => {
        return nums.map(x => x * x).sort(((a, b) => a - b));
    }

    sortedSquares([-4, -1, 0, 3, 10])
    sortedSquaresMap([-4, -1, 0, 3, 10])

    //--------------------------------------------------------
    // Duplicate Zeros
    const duplicateZeros = (arr) => {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            if (arr[i] === 0) {
                arr.splice(i, 0, 0)
                i++
            }
        }
        arr.splice(len, (arr.length - len))
    };
    duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])

    //--------------------------------------------------------
    // Merge Array
    const mergeArray = (nums1, m, nums2, n) => {
        let p1 = m - 1; // for index in array
        let p2 = n - 1;

        for (let i = m + n - 1; i >= 0; i--) {
            if (p2 < 0) break
            if (nums1[p1] > nums2[p2]) {
                nums1[i] = nums1[p1];
                p1--
            } else {
                nums1[i] = nums2[p2]
                p2--
            }
        }
        return nums1;
    };
    mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

    //--------------------------------------------------------
    // Remove Element
    const removeElement = (nums, val) => {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums.splice(i, 1);
                i--
            }
        }
        return nums.length
    };
    removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

    //--------------------------------------------------------
    // Remove Duplicates

    const removeDuplicates = (nums) => {
        let p1 = 0;

        for (let p2 = 1; p2 < nums.length; p2++) {
            if (nums[p1] === nums[p2]) {
                nums.splice(p1, 1);
                p2--
            } else {
                p1++
            }
        }
        return nums.length
    };
    removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

    //--------------------------------------------------------
    // Check If N and Its Double Exist

    const checkIfExist = (arr) => {
        let newArr = new Set();

        for (let i = 0; i < arr.length; i++) {
            if (newArr.has(arr[i] * 2) || newArr.has(arr[i] / 2)) return true;
            newArr.add(arr[i]);
        }
        return false;
    };
    checkIfExist([10, 2, 5, 3])

    const checkIfExistSecond = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let target = arr[i] / 2; //first element 10 / 2 => target is 5
            for (let j = 0; j < arr.length; j++) { //search the array for target
                if (j !== i && target === arr[j]) {
                    return true;
                }
            }
        }

        return false;
    };
    checkIfExistSecond([10, 2, 5, 3])

    //--------------------------------------------------------
    // Valid Mountain Array

    const validMountainArray = (arr) => {
        if (arr.length < 3) return false;
        let up = false
        let down = false
        let peekUp;
        let peekDown;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                peekUp = arr[i + 1];
                up = true;
            } else {
                peekUp = arr[i]
                break
            }
        }

        for (let j = arr.length - 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                peekDown = arr[j - 1]
                down = true;
            } else {
                peekDown = arr[j]
                break
            }
        }
        console.log(up, down, peekUp, peekDown);
        return peekUp === peekDown && up && down;
    };
    validMountainArray([0, 1, 2, 4, 2, 1])

    const validMountainArraySecond = (arr) => {
        let up = 0;
        let down = arr.length - 1;

        if (arr.length < 3) return false;

        // walk up
        while (up + 1 < down && arr[up] < arr[up + 1]) {
            up++
        }

        // walk down
        while (0 <= down && arr[down] < arr[down - 1]) {
           down--
        }
        return (up === down - 1 && up !== 0 && down !== arr.length - 1);
    }

    validMountainArraySecond([0, 1, 2, 4, 2, 1]);

    useEffect(() => {
        setState(mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

    }, [])

    return (
        <div>
            <p>Leet Code</p>
            <p>Result : {state} </p>
        </div>
    );
};