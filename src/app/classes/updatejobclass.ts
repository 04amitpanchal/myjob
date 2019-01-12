export class ujobclass{
  constructor(
    public job_id:number,
    public fk_rec_id:string,
    public job_title:string,
    public posted_date:string,
    public skill_req:string,
    public job_desc:string,
    public salary_min:number,
    public salary_max:number,
    public fk_company_name:string
  ){}
}
