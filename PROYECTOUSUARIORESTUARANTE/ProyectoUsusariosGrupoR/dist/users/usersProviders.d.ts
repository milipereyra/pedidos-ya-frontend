import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UserEntity } from "src/entities/user.entity";
import { RolEntity } from "src/entities/rol.entity";
import { RolService } from "src/rol/rol.service";
export declare const UserImports: {
    controller: (typeof UsersController)[];
    providers: (typeof UsersService | typeof RolService)[];
    entities: (typeof UserEntity | typeof RolEntity)[];
};
