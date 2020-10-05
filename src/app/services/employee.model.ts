export class Employee{
    public id: number;
    public name: string;
    public img: string;
    public group: string;
    public position: string;
    public leader: string;
    public experience: string;
    public note: string;
    public certificates: string;
    public comments: string;

    constructor(id: number, name: string, img: string, group: string, position: string, leader: string,
                experience: string, note: string, certificates: string, comments: string){
        this.id = id;
        this.name = name;
        this.img = img;
        this.group = group;
        this.position = position;
        this.leader = leader;
        this.experience = experience;
        this.note = note;
        this.certificates = certificates;
        this.comments = comments;
    }
}
