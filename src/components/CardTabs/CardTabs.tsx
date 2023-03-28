import styled from "styled-components";
import { MdCode } from "react-icons/md";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { BiCoffee } from "react-icons/bi";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { ImMail } from "react-icons/im";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

const CTWrapper = styled.div`
  margin-top: 15px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

const ControlButtonWrapper = styled.div`
  padding: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: background-color ease 0.4s;
  cursor: pointer;
  background-color: transparent;
  ${(props) =>
    props["aria-current"]
      ? "background-color: #444;"
      : "background-color: transparent;"}

  &:hover {
    background-color: #444;
  }
  > span {
    display: block;
  }
`;

type ControlButtonProps = {
  icon: any;
  onClick: (index: number) => void;
  index: number;
};

type TabWrapperProps = {
  children?: React.ReactNode;
  index: number;
  title?: string;
};

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
`;

const ItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.4s ease;
  border-radius: 5px;
  cursor: default;

  ${(props) => (props.role == "link" ? "cursor: pointer;" : "")}

  &:hover {
    background-color: #444;
  }
  > p {
    margin-left: 10px;
  }
`;

type ItemProps = {
  icon: React.ReactNode;
  name?: string;
  navigate?: string;
};

export const CardTabs = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const ControlButton = ({ icon, onClick, index }: ControlButtonProps) => {
    return (
      <ControlButtonWrapper
        onClick={() => {
          onClick(index);
        }}
        aria-current={index == activeTab}
      >
        {icon}
      </ControlButtonWrapper>
    );
  };

  const TabWrapper = ({ children, index, title }: TabWrapperProps) => {
    const Tab = styled.div`
      margin-top: 15px;
      padding: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    `;
    return index == activeTab ? (
      <>
        {title && (
          <h3
            style={{
              textAlign: "center",
              marginTop: "15px",
              fontWeight: "lighter",
            }}
          >
            {title}
          </h3>
        )}
        <Tab>{children}</Tab>
      </>
    ) : (
      <></>
    );
  };

  const Item = ({ icon, name, navigate }: ItemProps) => {
    return (
      <ItemWrapper
        role={navigate && "link"}
        onClick={() => {
          navigate && window.open(navigate, "_blank");
        }}
      >
        {icon}
        <p style={{ fontWeight: "lighter" }}>{name}</p>
      </ItemWrapper>
    );
  };

  const abilities: ItemProps[] = [
    {
      icon: <SiJavascript size='32' />,
      name: "Javascript",
      navigate: "https://music.youtube.com",
    },
    {
      icon: <SiTypescript size='32' />,
      name: "Typecript",
    },
    {
      icon: <SiReact size='32' />,
      name: "React JS/TS",
    },
    {
      icon: <SiNodedotjs size='32' />,
      name: "Node JS",
    },
    {
      icon: <SiHtml5 size='32' />,
      name: "HTML 5",
    },
    {
      icon: <SiCss3 size='32' />,
      name: "CSS 3",
    },
    {
      icon: <SiLinux size='32' />,
      name: "Linux",
    },
    {
      icon: <SiGithub size='32' />,
      name: "GitHub",
    },
  ];

  const social: ItemProps[] = [
    {
      icon: <SiLinkedin size='32' />,
      name: "LinkedIn",
      navigate: "https://www.linkedin.com/in/bruno-vinicius-98ab9616b/",
    },
    {
      icon: <SiGithub size='32' />,
      name: "GitHub",
      navigate: "https://github.com/brunicius",
    },
    {
      icon: <FaTwitterSquare size='32' />,
      name: "Twitter",
      navigate: "https://twitter.com/brunicius_",
    },
    {
      icon: <FaInstagramSquare size='32' />,
      name: "Instagram",
      navigate: "https://www.instagram.com/o.brunicius/",
    },
    {
      icon: <ImMail size='32' />,
      name: "E-Mail",
      navigate: "mailto:vruno.binicius@gmail.com",
    },
    {
      icon: <FaWhatsappSquare size='32' />,
      name: "WhatsApp",
      navigate: "https://api.whatsapp.com/send?phone=5587981615939",
    },
  ];

  return (
    <CTWrapper>
      <ControlsWrapper>
        <ControlButton
          icon={<IoPersonCircleSharp size='24' />}
          onClick={(index) => {
            if (index === activeTab) setActiveTab(null);
            else setActiveTab(index);
          }}
          index={1}
        />
        <ControlButton
          icon={<MdCode size='24' />}
          onClick={(index) => {
            if (index === activeTab) setActiveTab(null);
            else setActiveTab(index);
          }}
          index={2}
        />
        <ControlButton
          icon={<RiMessage2Fill size='24' />}
          onClick={(index) => {
            if (index === activeTab) setActiveTab(null);
            else setActiveTab(index);
          }}
          index={3}
        />
      </ControlsWrapper>
      <div ref={parent}>
        <TabWrapper index={1} title='Sobre mim'>
          <h1>
            Olá, meu nome é Bruno Vinicius, ou{" "}
            <span style={{ color: "#1E91D6" }}>brunicius</span>.
          </h1>
          <p
            style={{
              marginTop: "3px",
              fontWeight: "lighter",
              textIndent: "5px",
            }}
          >
            Sou um entusiasta da área de Tecnologia da Informação, com ênfase em
            Análise e Desenvolvimento de Software e Lógica de Programação.
            Atualmente, trabalho como Desenvolvedor Fullstack Júnior na C2Byte,
            onde desenvolvo softwares utilizando tecnologias como React, Node.JS
            e Python. Estou sempre em busca de aprimorar minhas habilidades e
            conhecimentos na área, com o objetivo de contribuir cada vez mais
            para o sucesso dos projetos nos quais estou envolvido.
          </p>
        </TabWrapper>
        <TabWrapper index={2} title='Habilidades'>
          <ItemsContainer>
            {abilities.map((abilitie) => {
              let props = {
                name: abilitie.name,
                icon: abilitie.icon,
                navigate: abilitie.navigate || undefined,
              };

              return <Item key={abilitie.name} {...props} />;
            })}
          </ItemsContainer>
        </TabWrapper>
        <TabWrapper index={3} title='Contato'>
          <ItemsContainer>
            {social.map((social) => {
              let props = {
                name: social.name,
                icon: social.icon,
                navigate: social.navigate || undefined,
              };

              return <Item key={social.name} {...props} />;
            })}
          </ItemsContainer>
        </TabWrapper>
      </div>
    </CTWrapper>
  );
};
