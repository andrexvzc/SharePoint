// components/api.ts
// Simulated user permissions per unit
const userPermissionsData: { [unitName: string]: string[] } = {
    marau: [
      'pagina-inicial',
      'fornecedores',
      'softwares',
      'servidores',
      'termos-de-suporte',
      'fluxo-de-atendimento',
      // 'documentacao' is intentionally omitted to simulate no access
    ],
    unidadeb: [
      'pagina-inicial',
      'fornecedores',
      'documentacao', // This unit has access to "Documentação"
    ],
    // Add more units and permissions as needed
  };
  
  export const fetchUserPermissions = async (unitName: string): Promise<string[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    // Return permissions for the unit, or default to empty array
    return userPermissionsData[unitName.toLowerCase()] || [];
  };
  
  export const fetchTabData = async (
    unitName: string,
    tabId: string
  ): Promise<string> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    // Simulated content per unit and tab
    const contentData: { [unitName: string]: { [tabId: string]: string } } = {
      marau: {
        'pagina-inicial':
          '<h3>Página Inicial - Marau</h3><p>Bem-vindo à unidade de Marau.</p>',
        fornecedores:
          '<h3>Fornecedores - Marau</h3><ul><li>Fornecedor A</li><li>Fornecedor B</li></ul>',
        softwares:
          '<h3>Softwares - Marau</h3><p>Lista de softwares utilizados na unidade.</p>',
        servidores:
          '<h3>Servidores - Marau</h3><p>Informações sobre os servidores da unidade.</p>',
        'termos-de-suporte':
          '<h3>Termos de Suporte - Marau</h3><p>Detalhes sobre os termos de suporte.</p>',
        'fluxo-de-atendimento':
          '<h3>Fluxo de Atendimento - Marau</h3><p>Descrição do fluxo de atendimento.</p>',
      },
      unidadeb: {
        'pagina-inicial':
          '<h3>Página Inicial - Unidade B</h3><p>Bem-vindo à unidade B.</p>',
        fornecedores:
          '<h3>Fornecedores - Unidade B</h3><ul><li>Fornecedor C</li><li>Fornecedor D</li></ul>',
        documentacao:
          '<h3>Documentação - Unidade B</h3><p>Links e arquivos de documentação.</p>',
      },
      // Add more units and content as needed
    };
  
    return (
      contentData[unitName.toLowerCase()]?.[tabId] ||
      '<p>Conteúdo não disponível.</p>'
    );
  };
  