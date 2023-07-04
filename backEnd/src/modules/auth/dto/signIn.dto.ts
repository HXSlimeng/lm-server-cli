import { IntersectionType, PartialType, PickType } from "@nestjs/mapped-types"
import { User } from "../entity/user.entity"

export class SingInDto extends PartialType(
    IntersectionType(PickType(User, ['username', 'password']))) {
}