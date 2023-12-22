"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

export default function OnBoarding() {
  return (
    <Wrapper>
      <Line />
      <Title>PICK-A-BOOK</Title>
      <Intro>
        That&apos;s the thing about books.
        <br /> They let you travel without <br />
        moving your feet.
      </Intro>
      <StartButton>시작하기</StartButton>
    </Wrapper>
  );
}

const Title = styled.h2`
  font-family: "Bebas";
  font-size: 270px;
  text-align: center;
`;

const Line = styled.hr`
  width: 100%;
  height: 20px;

  background-color: #fbff48;
  border: none;
`;
const Intro = styled.p`
  text-align: end;
  line-height: 30px;
`;
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 100px;
  color: #fbff48;
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 500;
`;

const StartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 100px;
  width: 100%;
  height: 80px;
  border: 5px solid #fbff48;
  color: #fbff48;
  background: none;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 28px;
`;