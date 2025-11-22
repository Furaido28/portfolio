import { Chip } from './Chip';

export class Card {
  constructor(
    private _header: string,
    private _title: string,
    private _description?: string,
    private _chips?: Chip[],
    private _imagesUrl?: string[]
  ) {}

  // -- Methods for images
  addImageUrl(value: string): void {
    if(this._imagesUrl) this._imagesUrl.push(value);
  }

  clearImages(): void {
    this._imagesUrl = [];
  }

  // -- Methods for chips
  addChip(value: Chip): void {
    if(this._chips) this._chips.push(value);
  }

  clearChips(): void {
    this._chips = [];
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

  get imagesUrl(): string[] {
    if(this._imagesUrl) return [...this._imagesUrl];
    return [];
  }

  get chips(): Chip[] {
    if (this._chips) return [...this._chips];
    return [];
  }
}
