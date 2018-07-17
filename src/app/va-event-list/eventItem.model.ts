export class eventItem {
    public Title:string;
    public Description:string;
    public EventID:string;
    public BeginDate:string;
    public Image:string;
    public City:string;

    constructor(title:string, desc:string, eventid:string, begindate:string, Image:string,City:string){
        this.Title = title;
        this.Description = desc;
        this.EventID = eventid;
        this.BeginDate = begindate;
        this.Image = Image;
        this.City = City;
    }
}