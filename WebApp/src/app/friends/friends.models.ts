export class Friend {

    constructor(
        public _id: string,
        public name: string,
        public position: Coordianate,
        public distanceToCurrentPosition: number) { }

}

export class Coordianate {
    constructor(
        longitude: number,
        latitude: number
    ) { }
}