"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function CertificationCard({ icon, title, org }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
  className="
    bg-[#060010]
    border border-white/10
    rounded-2xl
    w-full
    min-h-[160px]
    p-6
    transition-all
  "
>

        {/* ICON */}
        <CardItem translateZ="60" className="text-4xl mb-4">
          {icon}
        </CardItem>

        {/* TITLE */}
        <CardItem
          translateZ="50"
          className="text-lg font-semibold text-white"
        >
          {title}
        </CardItem>

        {/* ORG */}
        <CardItem
          translateZ="40"
          as="p"
          className="text-sm text-gray-400 mt-2"
        >
          {org}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
