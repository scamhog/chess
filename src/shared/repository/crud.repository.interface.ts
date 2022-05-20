export default interface CrudRepositoryInterface<EntityType> {

    save(entity: EntityType): Promise<EntityType>;

    list(): Promise<EntityType[]>;

    findById(id: string): Promise<EntityType | null>;
    
    deleteById(id: string): Promise<any>;
}