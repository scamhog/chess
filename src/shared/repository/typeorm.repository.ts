import { injectable, unmanaged } from "inversify";
import { DeleteResult, ObjectID, Repository, UpdateResult } from "typeorm";
import CrudRepository from "./crud.repository.interface";

@injectable()
export abstract class TypeormRepository<EntityType> implements CrudRepository<EntityType>{

    private readonly repository: Repository<EntityType>;

    constructor(@unmanaged() repository: Repository<EntityType>) {
        this.repository = repository;
    }

    async save(entity: EntityType): Promise<EntityType> {
        return await this.repository.save(entity);
    }

    async update(entity: EntityType, id: ObjectID): Promise<UpdateResult> {
        return await this.repository.update(id, entity);
    }

    list(): Promise<EntityType[]> {
        return this.repository.find();
    }

    deleteById(id: string): Promise<DeleteResult> {
        return this.repository.delete(id);
    }

    getRepository(): Repository<EntityType> {
        return this.repository;
    }

}