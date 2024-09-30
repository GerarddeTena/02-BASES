export interface DBZ_CHARACTER {
    id?: string;
    name: string;
    killi: number;
}

export class Character implements DBZ_CHARACTER {
  constructor(public name: string = '', public killi: number = 0, public id: string) {}
}
