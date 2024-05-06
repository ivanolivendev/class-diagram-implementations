export class Cliente {
  private cpf: string;
  constructor(cpf: string, name: string) {
    this.cpf = cpf;
    this.name = name;
  }
  private name: string;

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
