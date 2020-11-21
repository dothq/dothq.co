import { AppService } from "./app.service";
import { IdService } from "./id.service";

class ServicesManager {
    public app: AppService = new AppService();
    
    public id: IdService = new IdService();
}

const services = new ServicesManager();

export { 
    services,
    AppService,
    IdService
}