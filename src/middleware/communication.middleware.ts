import { Request, Response, NextFunction } from 'express';

export function communicationMiddleware(req: Request, res: Response, next: NextFunction) {
    const sender = req.headers['x-sender'];
    const receiver = req.headers['x-receiver'];

    console.log(`Sender: ${sender}, Receiver: ${receiver}`);

    const startTime = Date.now();
    res.on('finish', () => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log(`Request processed in ${elapsedTime}ms`);
    });

    next();
}
