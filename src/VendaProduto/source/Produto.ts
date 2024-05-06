export class Produto {
  private codigoBarra: number;
  private nome: string;
  private preco: number;

  constructor(codigoBarra: number, nome: string, preco: number) {
    this.codigoBarra = codigoBarra;
    this.nome = nome;
    this.preco = preco;
  }

  public getCodigoBarra(): number {
    return this.codigoBarra;
  }

  public setCodigoBarra(codigoBarra: number): void {
    this.codigoBarra = codigoBarra;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }
}
