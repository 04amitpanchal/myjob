export class applyclass{
  constructor(
    public apply_id:number,
    public fk_emp_id:string,
    public fk_job_id:number,
    public apply_date?:Date
  ){}
}
