import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Github, Icon, LucideProps } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGAElement>;
export type TechStackProps ={
    title:string,
    icons:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>

}


export function TechStack({icons}:{icons:}) {
  return (
    <div className="relative flex items-center">
      {icons.map((item,i)=>{
        const Icon = item.icon;
        return(
            <Dock magnification={60} distance={100}>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
            {/* <Icons.gitHub className="size-full" /> */}
            <Icon className="size-full"/>
            </DockIcon>

        </Dock>
        )
      })}
    </div>
  );
}


