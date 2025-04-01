import React from "react";
import Container from "../container";

const DesktopNav = () => {
  return (
    <nav className="py-6">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl">Logo</h1>

          <ul className="flex flex-row gap-8 text-md uppercase font-semibold">
            <li>Receitas</li>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Fale Conosco</li>
            <li>A Matupi</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default DesktopNav;
