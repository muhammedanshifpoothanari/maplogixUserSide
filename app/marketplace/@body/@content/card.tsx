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
  title: string;
  description: string;
  content: string;
  footer: string;
}

function useCardComponent(initialProps: CardProps) {
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
  
  return (
    <Card className=" w-[350px] card-container">
      <CardHeader>
        <CardTitle>{cardProps.title}</CardTitle>
        <CardDescription>{cardProps.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{cardProps.content}</p>
      </CardContent>
      <CardFooter>
        <p>{cardProps.footer}</p>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
