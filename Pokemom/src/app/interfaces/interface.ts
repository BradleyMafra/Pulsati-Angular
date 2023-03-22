export interface InterfacePokemon {
    nome: string;
    url: string;
}

export interface InterfacePokemonDetalhes {
    nome: string;
    tamanho: number;
    tipos: Array<{ tipo: { nome: string } }>;
    habilidades: Array<{ habilidade: { nome: string } }>;
}