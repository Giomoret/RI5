import { Descriptor } from "./Descriptor";
import { Empresa } from "./Empresa";
import { Endereco } from "./Endereco";
import { Funcionario } from "./Funcionario";
import { Telefone } from "./Telefone";

let endereco = new Endereco(123, "Av. Paulista", "Jardim Paulista", "São Paulo");
let telefone = new Telefone("011", "9-9999-9999");
let funcionario = new Funcionario("Tony Sterco", "123456789", "999.999.999-99", endereco, telefone);
let funcionarios = [funcionario];

let empresa = new Empresa(funcionarios, endereco, "ABC LTDA", "Mercado Livre", "99.999.999/0001-99");
//xsqdl
let descriptor = new Descriptor();
descriptor.descrever(empresa);
