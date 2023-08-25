import express from 'express';
import { MessageController } from './controllers/message.controller';
import { communicationMiddleware } from './middleware/communication.middleware';
import { responseInterceptor } from './interceptors/response.interceptor';
import { TranslationService } from './services/translation.service';

const app = express();
const port = 3000;

app.use(express.json());
app.use(communicationMiddleware);

const translationService = new TranslationService();
const messageController = new MessageController(translationService);

app.post('/api/earth-mars-comm/message', (req, res) => messageController.translateMessage(req, res));

// Add response interceptor
app.use((req, res) => {
    const sender = req.headers['x-sender'] as string;
    const receiver = req.headers['x-receiver'] as string;
    responseInterceptor(res, sender, receiver);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
