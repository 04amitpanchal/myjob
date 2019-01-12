export class appliedJobsclass{
  constructor(
    public job_id,
    public fk_rec_id,
    public job_title,
    public fk_company_name,
    public fk_emp_id,
    public fk_job_id,
    public apply_date,
    public emp_id,
    public first_name,
    public last_name,
    public emp_photo
  ){}
}
