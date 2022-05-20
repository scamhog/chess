export interface CommonServiceInterface<E> {

    findAll(): Promise<E[]>;

    register(entity: E): Promise<E>;

    update(entity: E, id: any): Promise<any>;

    delete(id: string): Promise<any>;
}