import { injectable, unmanaged } from "inversify";
import { DeleteResult, Repository } from "typeorm";
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

    list(): Promise<EntityType[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<EntityType | null> {
        return this.repository.findOne({ id: id } as any);
    }

    deleteById(id: string): Promise<DeleteResult> {
        return this.repository.delete(id);
    }

    getRepository(): Repository<EntityType> {
        return this.repository;
    }

}