export type bmiLevel = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    bmi: number[], yourBmi?: number;
}



export const bmiLevels: bmiLevel[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', bmi: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', bmi: [18.5, 24.9] },
    { title: 'Sobrepeso', color: '#E2B036', icon: 'down', bmi: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', bmi: [30.1, 99] },
];



export function calculateBmi(height: number, weight: number){
    const bmi = weight / (height * height);

    for(let i in bmiLevels) {
        if(bmi >= bmiLevels[i].bmi[0] && bmi < bmiLevels[i].bmi[1]){
            let levelCopy = {...bmiLevels[i]};

            levelCopy.yourBmi = parseFloat(bmi.toFixed(2));
            return levelCopy;
        }
    }

    return null;
};