export interface VolunteerDetails {
    name:string;
    email:string;
    gender:string;
    city:string;
    dob:string;
    phone:number;
    education:string;
    job:string;
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

