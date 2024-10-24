export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', '#186FC3');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly CSHARP = new Tag('C#', 'purple');
  static readonly JAVA = new Tag('Java', 'darkred');
  static readonly NODEJS = new Tag('Node.JS', 'brown');
  static readonly ASPNET = new Tag('ASP.NET', 'green');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
  static readonly UNITY = new Tag('Unity', 'grey');
  static readonly CYBERSECURITY = new Tag('Cybersecurity', '#317D35');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
