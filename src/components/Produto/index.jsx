import { Imgbx } from "./style";
import left from "../../assets/img/leftovers.png";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export function Produto(props) {
  const [protudoCarrinho, setProdutoCarrinho] = useState({
    nome: props.produto.nome,
    preço: props.produto.valor,
    inCart: 0,
    url: props.produto.urlImagem,
    desc: props.produto.desc
  });

  
  const [qtdCarrinho2, setQtdCarrinho2] = useState();
  const [logado,setLogado] = useState();
  const history = useNavigate();
  
  useEffect(() => {
    console.log("fui clicado")
    setQtdCarrinho2(localStorage.getItem("carrinho"));
  }, [qtdCarrinho2]);

  function comprar() {

    var loguei = localStorage.getItem("username")

    if(loguei!=null)
    {
      carrinho(protudoCarrinho);
      valorFinal(protudoCarrinho);
      alert("Produto adicionado ao carrinho")
    }
  else{
      alert("Voce deve estar logado para poder comprar um produto")
      history("/login");
      localStorage.clear();
  }
  



  }

  function carrinho(produtinho) {
    let produto = localStorage.getItem("carrinho");
    produto = parseInt(produto);

    if (produto) {
      localStorage.setItem("carrinho", produto + 1);
    } else {
      localStorage.setItem("carrinho", 1);
    }

    qtdCarrinho(produtinho);
    setQtdCarrinho2(localStorage.getItem("carrinho"));
  }

  function qtdCarrinho(produtinho) {
    let itensCarrinho = localStorage.getItem("produtoCarrinho");
    itensCarrinho = JSON.parse(itensCarrinho);

    //se o carrinho nao estive fazio
    if (itensCarrinho != null) {
      if (itensCarrinho != undefined) {
        itensCarrinho = {
          ...itensCarrinho,
          [produtinho.nome]: produtinho,
        };
      }
      itensCarrinho[produtinho.nome].inCart += 1;
    } else {
      produtinho.inCart = 1;
      itensCarrinho = {
        [produtinho.nome]: produtinho,
      };
    }

    localStorage.setItem("produtoCarrinho", JSON.stringify(itensCarrinho));
  }

  function valorFinal(produtinho) {
    let valorTotal = localStorage.getItem("ValorTotal");

    if (valorTotal != null) {
      valorTotal = parseInt(valorTotal);
      localStorage.setItem("ValorTotal", valorTotal + produtinho.preço);
    } else {
      localStorage.setItem("ValorTotal", produtinho.preço);
    }
  }

  return (
    <>
      <Imgbx>
        <div className="container1">
          <div className="card" id="Muscle">
            <div className="imgBx">
              <img id="poke" src={props.produto.urlImagem} />
            </div>
            <div className="contentBx">
              <h2>{props.produto.nome}</h2>
              <div className="color">
                <h3>
                  <strong className="valor"> {props.produto.valor}</strong>
                </h3>
              </div>

              <a onClick={comprar} className="btnComprar">Comprar</a>{" "}

            </div>
          </div>
        </div>
      </Imgbx>
    </>
  );
}
