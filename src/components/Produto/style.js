import styled from "styled-components";

export const Imgbx = styled.div`



#poke{
    width:55%;
    height:auto;
}

margin-top: 2rem;
margin-left: 6.6rem;
display: inline-block;



.container1 .card{
  box-shadow: 0px 0px 15px -5px;
  position: relative;
  width: 203.6px;
  height: 314.75px;
  background: #6D398A;
  border-radius: 20px;
  overflow: hidden;
}

.container1 .card:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  clip-path: circle(120px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.container1 .card:hover:before{
  clip-path: circle(250px at 80% -38%);
}



.container1 .card .imgBx{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.container1 .card:hover .imgBx{
  top: -16%;
  transform: translateY(0%);
    
}

.container1 .card .imgBx img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 270px;
}

.container1 .card .contentBx{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.container1 .card:hover .contentBx{
  height: 158px;
}

.container1 .card .contentBx h2{
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
}

.container1 .card .contentBx .size, .container1 .card .contentBx .color {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;
}

.container1 .card:hover .contentBx .size{
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.container1 .card:hover .contentBx .color{
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.container1 .card .contentBx .size h3, .container1 .card .contentBx .color h3{
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container1 .card .contentBx .size span{
  width: 26px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  display: inline-block;
  color: #111;
  background: #fff;
  margin: 0 5px;
  transition: 0.5s;
  color: #111;
  border-radius: 4px;
  cursor: pointer;
}

.container1 .card .contentBx .size span:hover{
  background: #9bdc28;
}

.container1 .card .contentBx .color span{
  width: 20px;
  height: 20px;
  background: #ff0;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.container1 .card .contentBx .color span:nth-child(2){
  background: #9bdc28;
}

.container1 .card .contentBx .color span:nth-child(3){
  background: #03a9f4;
}

.container1 .card .contentBx .color span:nth-child(4){
  background: #e91e63;
}

.container1 .card .contentBx a{
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  margin-top: 0;
}

.container1 .card:hover .contentBx a{
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
  
}




`