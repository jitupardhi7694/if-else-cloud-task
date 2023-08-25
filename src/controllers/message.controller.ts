import { Request, Response } from 'express';
import { TranslationService } from '../services/translation.service';

export class MessageController {
    constructor(private translationService: TranslationService) {}

    async translateMessage(req: Request, res: Response) {
        try {
            const sender = req.headers['x-sender'] as string;
            const receiver = req.headers['x-receiver'] as string;
            const message = req.body.message as string;

            // Determine translation direction based on sender and receiver
            const translationResult = sender === 'earth'
                ? this.translationService.earthToMars(message)
                : this.translationService.marsToEarth(message);

            res.json({
                [`Response from ${receiver.charAt(0).toUpperCase() + receiver.slice(1)}`]: message,
                'Nokia Translation': translationResult,
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
