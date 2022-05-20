export default interface CrudRepositoryInterface<EntityType> {

    save(entity: EntityType): Promise<EntityType>;

    update(entity: EntityType, id: any): Promise<any>;

    list(): Promise<EntityType[]>;

    deleteById(id: string): Promise<any>;
}