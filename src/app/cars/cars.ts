export interface Cars {
    name: string;
    cars: Car[];
}

export interface Car {
    make: string;
    model: string;
}

export interface Make {
    name: string;
    model: Model[];
}

export interface Model {
    name: string;
    show: Show[];
}

export interface Show {
    name: string;
}
