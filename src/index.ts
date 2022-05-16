
import app from "./app";
import { AppDataSource } from "./data-source"

export default AppDataSource.initialize().then(async () => {
    app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
}).catch(error => console.log(error));
