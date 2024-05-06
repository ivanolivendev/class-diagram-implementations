import { Produto } from "./Produto";

export class ItemVenda {
  constructor(qtd: number, valorUnitario: number, produto: Produto) {
    this.qtd = qtd;
    this.valorUnitario = valorUnitario;
    this.produto = produto;
  }
  private qtd: number;
  private valorUnitario: number;
  private produto: Produto;

  public getQtd(): number {
    return this.qtd;
  }

  public setQtd(qtd: number): void {
    this.qtd = qtd;
  }

  public getValorUnitario(): number {
    return this.valorUnitario;
  }

  public setValorUnitario(valorUnitario: number): void {
    this.valorUnitario = valorUnitario;
  }

  public getProduto(): Produto {
    return this.produto;
  }

  public setProduto(produto: Produto): void {
    this.produto = produto;
  }
}
