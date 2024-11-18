export class FaceSnap{
    
    location?: string;
    id: string;

    constructor(public title: string, 
        public description: string,
        public createdDate: Date,
        public snaps: number,
        public imageUrl: string){
        this.id = crypto.randomUUID().substring(0,8);
        }
    addSnap(): void{
        this.snaps++;
    }
    removeSnap(): void{
        this.snaps--;
    }
    setLocation(location: string): void{
        this.location = location;
    }
    WithLocation(location: string): FaceSnap{
        this.setLocation(location);
        return this;
    }
    snapFaceSnapById(faceSnapId: string): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.addSnap();
    }
}
