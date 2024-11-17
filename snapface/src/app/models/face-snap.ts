export class FaceSnap{
    
    location?: string;

    constructor(public title: string, 
        public description: string,
        public createdDate: Date,
        public snaps: number,
        public imageUrl: string){}
    addSnap(): void{
        this.snaps++;
    }
    removeSnap(): void{
        this.snaps--;
    }
    setLocation(location: string): void{
        this.location = location;
    }
}