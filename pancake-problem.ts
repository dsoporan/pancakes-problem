function isBlankSide(element: string) {
    return element === '-';
}

function revertPancakes(section) {
    return Array.from(section)
        .map((pancake) => (pancake === "-" ? "+" : "-"))
        .join("");
}

function minimumFlips(testCase: string[], k: number) {
    let flips = 0;
    let flipped, toBeFlipped;
    for(let index = 0; index <= testCase.length - k; index++){
        if (isBlankSide(testCase[index])) {
            flips += 1;
            toBeFlipped = testCase.substring(index, index + k);
            flipped = revertPancakes(toBeFlipped);
            testCase = testCase.replace(toBeFlipped, flipped);
        }
    }

    return testCase.includes('-') ? -1 : flips;
}


function pancakesProblem(input: string) {
    const digitsFromInput = input.match(/\d/g);

    const testCasesNo = Number(digitsFromInput[0]);
    const testCases = input
        .split(/\d/g)
        .filter((item) => item)
        .map((item) => item.trim());

    let k;
    let result = "";
    let minimumFlipsPerCase;
    testCases.forEach((testCase, index) => {
        k = Number(digitsFromInput[index + 1]);
        result += `Case #${index + 1}: `;
        minimumFlipsPerCase = minimumFlips(testCase, k);
        result += minimumFlipsPerCase >= 0 ? minimumFlipsPerCase : 'IMPOSSIBLE'
        if (index + 1 < testCasesNo) {
            result += ' ';
        }
    })

    return result;
}

console.log(pancakesProblem('4 ---+-++- 3 +++++ 4 -+-+- 4 +++---+ 3'));