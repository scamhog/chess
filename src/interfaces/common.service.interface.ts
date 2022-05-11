export default interface CommonServiceInterface<E> {
    save(entity: E): E;
    findAll(): Array<E>;
    findById(id: number): E;
    deleteById(id: number): void;
}