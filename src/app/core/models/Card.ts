import { Chip } from './Chip';

export class Card {
  constructor(
    private _header: string,
    private _title: string,
    private _description?: string,
    private _chips?: Chip[],
    private _contentType?: 'standard' | 'about' | 'skills' | 'project' | 'contact',
    private _additionalData?: any
  ) {}

  static empty(): Card {
    return new Card('', '');
  }

  // -- Getters
  get header(): string {
    return this._header;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    if(this._description) return this._description;
    return '';
  }

  get chips(): Chip[] {
    if (this._chips) return [...this._chips];
    return [];
  }

  get contentType(): string {
    if(this._contentType) return this._contentType;
    return 'standard';
  }

  get additionalData(): any {
    return this._additionalData;
  }

  clone(): Card {
    // 1. Clonage de chaque objet Chip
    const clonedChips = this.chips.map(chip => chip.clone());

    // 2. Clonage de _additionalData (soit en utilisant un clone profond
    //    avec JSON.parse(JSON.stringify(obj)) pour un POJO,
    //    soit une méthode de clone dédiée si l'objet est complexe)
    // Ici, nous utilisons l'approche shallow/safe pour _additionalData
    const clonedAdditionalData = this._additionalData
      ? JSON.parse(JSON.stringify(this._additionalData))
      : undefined;

    return new Card(
      this.header,
      this.title,
      this.description,
      clonedChips,
      this._contentType,
      clonedAdditionalData
    );
  }
}
