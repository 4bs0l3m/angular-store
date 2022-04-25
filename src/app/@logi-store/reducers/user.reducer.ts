import { createReducer, on } from "@ngrx/store";
import { changeUser } from "../actions/user.action";
import { UserDTO } from "../models/UserDTO";

export const userReducer=createReducer(new UserDTO(),on(changeUser,(state,{user})=>user));

