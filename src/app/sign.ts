export interface SignupDetails {
    name:string;
    email:string;
    pass:string;
    
    }
    export interface UniqueConstraintError {
      errorNum: Number;
      offset: Number;
    }
    export interface InsertedSuccess {
      lastRowid: String;
      rowsAffected: Number;
    }
    export interface Read {
        Result: [];
    }
    export interface LoginDetails {
      email : string;
      pass : string;
    }

