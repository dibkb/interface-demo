import React from "react";
import ChevronRight from "../icons/ChevronRight";
interface LogThumbnailProps {
  title: string;
  content: string;
}
const LogThumbnail = ({ title, content }: LogThumbnailProps) => {
  return (
    <main className="flex items-center justify-between p-4 border border-interface-base-black/[.1] rounded-md bg-interface-neutrals-50 cursor-pointer hover:bg-interface-base-black/[.1]">
      <div className="font-bold flex flex-col gap-3">
        <p className="text-interface-neutrals-500 text-xs">{title}</p>
        <h3 className="text-sm text-interface-base-black">{content}</h3>
      </div>
      <button>
        <ChevronRight />
      </button>
    </main>
  );
};

export default LogThumbnail;
