import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ExperienciaProfissional from './components/ExperienciaProfissional/ExperienciaProfissional';
import ImagemButton from './components/ImagemButton/ImagemButton';


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`
function App() {
  return (
    <div>
      <GlobalStyle />
      <AppContainer>
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/bWqE-edW3afAFlTl_7Dd_6qWccQqFISFqle8MSwcRxbHwggJvSLE8kJmdk-cChthBrdbWUjkI3QTCkzgcNkN5nijKBaYsRhbu8saU6gdJMYVCH6B08hqBMDbXhZJEbPAzCGx3rv2xqTATz2VxhBL_ykKFfPZiBxWgINVpQa66Ipfygr6E4R4c05hqCaOobjo3kTVcq8-hRFkZoE7U2nSn7yowmNZjl7M7pRP7Fn4qrJAoYB5fo9Wu47p8O84kmvjRhLzBU_N0adp5C26qyISYG9zrKHG37ModR6Tmjj5fCQD4HyHYE-pCVFpF9BnX1DtZ9i9g9Tel5TtW-wcVGb8vLSiPNsZ8Xmokfzxv9JcMGZNJgh77cLzM0OPkXa63CmvoeDe_tKXgEboy_9jGCYZHR2sK7-U2XzXRaJEQPak16ZZPd3TBzVR_utJh01XB4mH8PFu5I7ZvhuurNGIiweIgijsz73-dG4qo2TPbGkG0qsjYW2ZnRiNmRsvFvwYyp4c1RvkOoB5-ySxkp27nQ9kz-Iv0FVk_6vSwbpREHXSS322FfaxLaJYRYp3NQz1XincmTfVXevo4-gCmYn-EoIj-PU7597H4Kudyw8XqhptpWAO9X1MufioiaDImXO8zL0b3Sb6Z5O6YOxhvVIJV3I4KRj2Bk2muzkpH476SIk8__13hhHuAUI57tO727yuyF6HcZQ_rgQytcH7u9WgRZIlgxnqgQ=w493-h663-no?authuser=0" 
          nome="Bianca Leonardo" 
          descricao="Oi, eu sou a Bianca, tenho 28 anos e sou do Rio de Janeiro. Me formei em Sistemas de informação e atualmente estou estudando Desenvolvimento FullStack!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno imagem='https://image.flaticon.com/icons/png/512/126/126516.png' titulo='E-mail: ' conteudo='biancasleonardo@gmail.com'/>
        <CardPequeno imagem='https://image.flaticon.com/icons/png/512/126/126470.png' titulo='Endereço: ' conteudo='Rua B, 3450 - Rio de Janeiro'/>
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Experiências Profissionais</h2>
        <ExperienciaProfissional 
          imagem='https://media.glassdoor.com/sqll/2483263/mro-logistics-squarelogo-1551925291908.png' 
          cargo='Assistente Operacional' 
          nomeEmpresa='MRO Serviços Logísticos S.A' 
          descricao='Desenvolvimento de planilhas, Controle de estoque da Light
          via SAP, envio diário de contagem de estoque.'
        />
        <ExperienciaProfissional 
          imagem='https://media-exp1.licdn.com/dms/image/C510BAQHECoJACc4ZCA/company-logo_200_200/0/1519867296135?e=2159024400&v=beta&t=LQ9aDl5h6_DD-1X-DSaKt5lgFfliZgrhRVBk65B1Wsw' 
          cargo='Auxiliar de Exportação' 
          nomeEmpresa='Brasiliense Comissária de Despachos Ltda' 
          descricao='Contato direto com o cliente, análise de documentos, Registro de documentos de exportação (RE e DDE). 
          Liberação alfandegária de processos típicos e atípicos, entre eles: Tempórária (conserto, aluguel, empréstimo, aperfeiçoamento...), Reexportação. Outros atividades: Digitação de LI e suporte no carregamento de importação, Suporte ao TI com sede em Campinas.'
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Formações Acadêmicas</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-faculdade-2.jpg" 
          nome="Estácio de Sá" 
          descricao="Sistemas de informação" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer>
    </div>
    
  );
}

export default App;
