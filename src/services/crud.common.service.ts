import CommonServiceInterface from "../interfaces/common.service.interface";

export default class CrudCommonService<E> implements CommonServiceInterface<E>{
    save(entity: E): E {
        throw new Error("Method not implemented.");
    }
    findAll(): E[] {
        throw new Error("Method not implemented.");
    }
    findById(id: number): E {
        throw new Error("Method not implemented.");
    }
    deleteById(id: number): void {
        throw new Error("Method not implemented.");
    }
}