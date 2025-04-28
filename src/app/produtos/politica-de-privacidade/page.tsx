import Container from "@/components/container";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 py-20">
        <div>
          <h1 className="text-4xl ">Política de Privacidade</h1>
        </div>

        <div className="flex flex-col gap-3">
          {" "}
          <h2 className="font-semibold">1. Compromisso com a Privacidade</h2>
          <p>
            A <strong>Matupi Laticínios Ltda.</strong> valoriza a privacidade de
            seus usuários e está comprometida em proteger os dados pessoais
            coletados em conformidade com a Lei Geral de Proteção de Dados
            Pessoais (LGPD – Lei nº 13.709/2018).
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">2. Coleta de Dados Pessoais</h2>
          <p>
            Coletamos dados pessoais fornecidos diretamente por você ao utilizar
            nossos serviços, como:
          </p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Informações de pagamento (quando aplicável)</li>
            <li>Outras informações relevantes para prestação de serviços</li>
          </ul>
          <p>Também podemos coletar dados automaticamente, como:</p>
          <ul>
            <li>Endereço IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas acessadas</li>
            <li>Tempo de permanência no site</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          {" "}
          <h2 className="font-semibold">
            3. Finalidade do Tratamento de Dados
          </h2>
          <p>Utilizamos seus dados pessoais para:</p>
          <ul>
            <li>Fornecer e aprimorar nossos serviços</li>
            <li>Processar pagamentos e transações</li>
            <li>Enviar comunicações relacionadas aos serviços</li>
            <li>Cumprir obrigações legais e regulatórias</li>
            <li>Garantir a segurança e integridade do site</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">4. Compartilhamento de Dados</h2>
          <p>
            Não compartilhamos seus dados pessoais com terceiros, exceto quando
            necessário para:
          </p>
          <ul>
            <li>Cumprir obrigações legais ou regulatórias</li>
            <li>Proteger nossos direitos e propriedades</li>
            <li>Prevenir fraudes ou atividades ilegais</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">
            5. Armazenamento e Segurança dos Dados
          </h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados
            pessoais contra acesso não autorizado, perda, destruição ou
            alteração. Seus dados são armazenados em servidores seguros e
            acessíveis apenas por pessoal autorizado.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-semibold">6. Direitos dos Titulares de Dados</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento de seus dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>
              Solicitar a anonimização, bloqueio ou eliminação de dados
              desnecessários ou excessivos
            </li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>
          <p>
            Para exercer esses direitos, entre em contato conosco conforme
            indicado na seção 8.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">
            7. Cookies e Tecnologias Semelhantes
          </h2>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação. Você
            pode configurar seu navegador para recusar cookies, mas isso pode
            afetar a funcionalidade do site.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">8. Contato</h2>
          <p>
            Se tiver dúvidas ou solicitações relacionadas a esta Política de
            Privacidade, entre em contato conosco:
          </p>
          <ul>
            <li>
              <strong>E-mail</strong>:{" "}
              <a href="contato ">contato@contato@laticiniomatupi.com.br</a>
            </li>
            <li>
              <strong>Endereço</strong>: Rua Exemplo, 123, Manaus – AM, Brasil
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">
            9. Alterações nesta Política de Privacidade
          </h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Recomendamos que você a revise regularmente para estar ciente de
            quaisquer alterações.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
