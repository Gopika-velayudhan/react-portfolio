import React from 'react';
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Card=styled.div`
width:330px;
height:490px;
background-color:${({theme}) =>theme.card};
cursor:pointer;
border-radius:10px;
box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
overflow:hidden;
transition: all 0.5s ease-in-out;
padding:26px 20px;
display:flex;
flex-direction:column;
gap:14px;
text-decoration:none;

 &:hover{
  transform :translateY(-10px);
  box-shadow:0 0 50px 4px rgba(0,0,0,0.6);
  filter:brightness(1.1);
}`;

const Image =styled.img`
width:100%;
height:180px;
background-color:${({theme}) =>theme.white};
border-radius:10px;
object-fit:cover;
box-shadow:0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags=styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
gap:8px;
margin-top:4px;
align-items:center;`;

const Tag=styled.span`
font-size:12px;
font-weight:400;
color:${({theme}) => theme.primary};
background-color:${({theme}) => theme.primary+15};
padding:2px 8px;
border-radius:10px;
`;

const Details=styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  gap:0px;
  padding:0px 2px;

`;

const Title=styled.div`
  font-size:20px;
  font-weight:600;
  color:${({theme})=>theme.text_secondary};
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  max-width:100%;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
`;

const Date=styled.div`
font-size:12px;
font-weight:400;
margin-left:2px;
color:${({theme}) => theme.text_secondary + 80};
@media (max-width: 768px) {
  font-size:10px;
}
`;
const Description=styled.div`
font-weight:400;
color:${({theme}) =>theme.text_secondary +99};
overflow:hidden;
text-overflow:ellipsis;
-webkit-line-clamp:3;
-webkit-box-orient:vertical;
display:-webkit-box;
margin-top:8px;
max-width:100%;
`


const Members=styled.div`
  display:flex;
  align-items:center;
  padding-left:10px;
`;

const Avatar =styled.img`
width:38px;
height:38px;
border-radius:50%;
margin-left:-10px;
background-color:${({theme}) =>theme.white};
box-shadow: 0 0 10px rgba(0,0,0,0.2);
border:3px solid ${({theme}) => theme.card};
`;

const GithubLogo = styled(FaGithub)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: color 0.3s ease;
  marginTop:'100px';

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Button = styled.a`
width:300px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 5px;
  padding: 6px 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary + 50};
  }
`;

const Projectcard = ({project}) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      
      <Details>
        <Title>{project.title} </Title>
        
        <Date>{project.date} </Date>
        <Description>{project.description}</Description>
        
      </Details>
      <div style={{display:"flex",gap:"200px"}}>
      <a href={project.github} target="_blank"><GithubLogo/></a>
      
      {project.liveapp && (
          <Button href={project.liveapp} target="_blank">
            Live App
          </Button>
        )}
      
      </div>
      
      {/* <Members>
        {project.member?.map((member,index) => (
          
          <Avatar key={index} src={member.img} />
        ))}
      </Members> */}
    </Card>
  );
};

export default Projectcard;