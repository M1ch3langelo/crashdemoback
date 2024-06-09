import { Request, Response } from 'express';

export const getCrash = (req: Request, res: Response) => {
    console.log('GET /crash request received');

    let crashValue;
    const random = Math.random();

    if (random < 0.51) {
        // 51% chance of being under 2
        crashValue = (Math.random() * 2).toFixed(2);
    } else if (random < 0.76) {
        // 25% chance of being between 2 and 4
        crashValue = (Math.random() * 2 + 2).toFixed(2);
    } else if (random < 0.96) {
        // 20% chance of being between 5 and 10
        crashValue = (Math.random() * 5 + 5).toFixed(2);
    } else if (random < 0.98) {
        // 2% chance of being between 10 and 50
        crashValue = (Math.random() * 40 + 10).toFixed(2);
    } else {
        // 1% chance of being between 50 and 1000
        crashValue = (Math.random() * 950 + 50).toFixed(2);
    }

    console.log('Crash value:', crashValue)

    res.send(crashValue);
};
