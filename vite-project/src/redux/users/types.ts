// Define the user type
export type UserType = {
    id: string;
    name: string;
    lastname: string;
    email: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // This type will represent the sub-state for getting a single user by ID
  export type IUserState = {
    data: UserType | null;
    isLoading: boolean;
    errors: string;
  }
  
  // The users global state
  export type UsersStateType = {
    user: IUserState,
    // Later, we can add other sub-states like:
    // list,
    // create,
    // update,
    // remove
  }
  
  // (1)
  export const USERS = "users";
  export type USERS = typeof USERS; // Typescript line
  
  // (2)
  export const GET_USER_BY_ID = `${USERS}/getUserAction`;
  export type GET_USER_BY_ID = typeof GET_USER_BY_ID; // Typescript line