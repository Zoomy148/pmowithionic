export class Project{
    public id: string;
    public name: string;
    public leader: string;
    public comments: string;
    public part: string;
    public position: string;

    constructor(id: string, name: string, leader: string, comments: string, part: string, position: string){
        this.id = id;
        this.name = name;
        this.leader = leader;
        this.comments = comments;
        this.part = part;
        this.position = position;
    }
}