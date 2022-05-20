import { injectable } from "inversify";
import CrudRepositoryInterface from "../repository/crud.repository.interface";
import { CommonServiceInterface } from "./common.service.interface";

@injectable()
export class ComonService<EntityType, RepositoryType extends CrudRepositoryInterface<EntityType>>
    implements CommonServiceInterface<EntityType>{

    protected repository: RepositoryType;

    constructor(repository: RepositoryType) {
        this.repository = repository;
    }

    update(entity: EntityType, id: any): Promise<EntityType> {
        return this.repository.update(entity, id);
    }

    findAll(): Promise<EntityType[]> {
        return this.repository.list();
    }

    register(entity: EntityType): Promise<EntityType> {
        return this.repository.save(entity)
    }

    delete(id: string): Promise<any> {
        return this.repository.deleteById(id);
    }
}