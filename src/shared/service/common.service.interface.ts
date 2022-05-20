export interface CommonServiceInterface<E> {

    findAll(): Promise<E[]>;

    finById(id: string): Promise<E | null>;

    register(entity: E): Promise<E>;
    
    delete(id: string): Promise<any>;
}