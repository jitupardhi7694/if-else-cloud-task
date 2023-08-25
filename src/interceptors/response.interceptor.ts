import { Response } from 'express';

export function responseInterceptor(res: Response, sender: string, receiver: string) {
    if (sender === 'earth') {
        res.json({ [`Response from ${receiver.charAt(0).toUpperCase() + receiver.slice(1)}`]: res.json() });
    } else {
        res.json({ [`Response from ${receiver.charAt(0).toUpperCase() + receiver.slice(1)}`]: res.json() });
    }
}
