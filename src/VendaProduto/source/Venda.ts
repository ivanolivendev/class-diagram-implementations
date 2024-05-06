import { Cliente } from "./Cliente";
import { ItemVenda } from "./ItemVendido";
import { Produto } from "./Produto";

export class Venda {
  private data: Date;
  private total: number;
  private formPgt: string;
  private cliente: Cliente;
  private itemVenda: ItemVenda[] = [];
  private produto: Produto;

  constructor(data: Date, total: number, formPgt: string) {
    this.data = data;
    this.total = total;
    this.formPgt = formPgt;
  }

  public getItemVenda(): ItemVenda[] {
    return this.itemVenda;
  }

  public addItemVenda(pr: Produto, qtd: number, valorUnitario: number) {
    const iv = new ItemVenda(qtd, valorUnitario, this.produto);
    this.itemVenda.push(iv);
  }

  public getData(): Date {
    return this.data;
  }

  public setData(data: Date): void {
    this.data = data;
  }

  public getTotal(): number {
    return this.total;
  }

  public setTotal(total: number): void {
    this.total = total;
  }

  public getFormPgt(): string {
    return this.formPgt;
  }

  public setFormPgt(formPgt: string): void {
    this.formPgt = formPgt;
  }
}
