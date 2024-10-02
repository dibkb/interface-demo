/* eslint-disable @next/next/no-img-element */
import React from "react";
interface DocumentsAddedButton {
  image: string;
  title: string;
  name: string;
}

import Download from "../icons/Download";
import amazon from "../../img/amazon.png";
import drive from "../../img/drive.png";
import unicommerce from "../../img/unicommerce.png";
const DocumentsAddedButton = ({ image, title, name }: DocumentsAddedButton) => {
  return (
    <div className="flex items-center justify-between p-4 border border-neutral-300 rounded-md bg-interface-neutrals-100">
      <section className="flex items-center gap-4">
        <img src={image} alt="" />
        <div className="font-bold">
          <p className="text-[10px] text-interface-neutrals-600">{title}</p>
          <h3 className="text-sm text-interface-base-black">{name}</h3>
        </div>
      </section>
      <button className="p-2 ">
        <Download />
      </button>
    </div>
  );
};

export default DocumentsAddedButton;

export const DownloadButtonUnicommece = ({ name }: { name: string }) => {
  return (
    <DocumentsAddedButton
      image={unicommerce.src}
      title={"Proof of Delivery"}
      name={name}
    />
  );
};
export const DownloadButtonDrive = ({ name }: { name: string }) => {
  return (
    <DocumentsAddedButton
      image={drive.src}
      title={"Invoice document"}
      name={name}
    />
  );
};
export const DownloadButtonAmazon = ({ name }: { name: string }) => {
  return (
    <DocumentsAddedButton
      image={amazon.src}
      title={"Invoice document"}
      name={name}
    />
  );
};
