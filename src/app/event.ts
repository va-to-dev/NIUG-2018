export class Event {

    title: string;
    description: string;
    imgUrl:string;
    eventid: string;
     beginDate:Date;
     location:string;
     eventPageUrl:string;

     constructor(title:string, desc:string, begindate:string, Image:string, eventID:string, location:string, url:string) {
        this.title = title;
        this.description=desc;
        if(Image.length>0 && Image.startsWith("~")) {
            this.imgUrl = Image.substring(1);
        }
        else
        {
            this.imgUrl = Image;
        }
        this.beginDate = new Date(begindate);
        this.eventid=eventID;
        this.location = location;
        this.eventPageUrl = url;
     }

    }



