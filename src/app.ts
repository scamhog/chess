import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';

// const app: Application = express();

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello');
// });


// app.listen(3000, () => console.log('Server is running on http://localhost:3000'));