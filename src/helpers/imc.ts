export type ILevel = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: ILevel[] = [
    {title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0,18.599]},
    {title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6,24.999]},
    {title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25,30.099]},
    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1,99]},
];

export const calculateImc = (height: number, weight: number) => {
    const imc = parseFloat((weight / (height * height)).toFixed(3));

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
            let levelCopy: ILevel = {...levels[i]};

            levelCopy.yourImc = imc;
            return levelCopy;
        }
    }

    return null;
}