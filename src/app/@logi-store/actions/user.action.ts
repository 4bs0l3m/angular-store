import { createAction, props } from "@ngrx/store";
import { UserDTO } from "../models/UserDTO";

export const changeUser=createAction('[User Component] changeUser',props<{user:UserDTO}>());