"use client"

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  set: string;
  title: string;
  description: string;
  content: string;
  footer: string;
}

function useCardComponent(initialProps: CardProps) {
  console.log('useCardComponent!!!!!!!!!!!!!!!!!!!!!!!!!', initialProps);
  
    const [props, setProps] = useState(initialProps);
  
    const setTitle = (newTitle: string) => {
      setProps({ ...props, title: newTitle });
    };
  
    const setDescription = (newDescription: string) => {
      setProps({ ...props, description: newDescription });
    };
  
    const setContent = (newContent: string) => {
      setProps({ ...props, content: newContent });
    };
  
    const setFooter = (newFooter: string) => {
      setProps({ ...props, footer: newFooter });
    };
  
    return {
      props,
      setTitle,
      setDescription,
      setContent,
      setFooter,
    };
  }

  
const CardComponent: React.FC<CardProps> = (props) => {
    const { props: cardProps, setTitle, setDescription, setContent, setFooter } =
    useCardComponent(props);
  if(cardProps.set === 'load'){
  return (
    <Card className=" w-[350px] h-[240px] card-container gap-5">
      <CardHeader>
        <CardTitle>{cardProps.title}</CardTitle>
        <CardDescription>📌 {cardProps.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-10">
        <p style={{ fontSize: '50px' }}>🚛</p>
      <p>truck type: {cardProps.content}</p>
        </div>
     
      </CardContent>
      <CardFooter>
      <div className="flex gap-10">
      <p style={{ fontSize: '30px' }}>📍</p>
        <p>location: {cardProps.footer}</p>
        </div>
      </CardFooter>
    </Card>
  
  );
  }else if(cardProps.set === 'truck') {
    return (
      <Card className=" w-[350px] h-[240px] card-container gap-5">
        <CardHeader>
          <CardTitle>{cardProps.title}</CardTitle>
          <CardDescription>📌 {cardProps.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-10">
          <p style={{ fontSize: '50px' }}>🚛</p>
        <p>truck type: {cardProps.content}</p>
          </div>
       
        </CardContent>
        <CardFooter>
        <div className="flex gap-10">
        <p style={{ fontSize: '30px' }}>📍</p>
          <p>location: {cardProps.footer}</p>
          </div>
        </CardFooter>
      </Card>
    
    );
  } else {

  }
};

export default CardComponent;
