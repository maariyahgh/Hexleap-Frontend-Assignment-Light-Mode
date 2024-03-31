import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponent2Type = {
  maskGroup?: string;
  sacramentoRiverCats?: string;
  events?: string;
  baseball?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  maskGroup,
  sacramentoRiverCats,
  events,
  baseball,
  propMinWidth,
}) => {
  const baseball1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 bg-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-start py-2.5 pr-2.5 pl-[10.1px] box-border gap-[15.4px] min-w-[234px] max-w-[238px] z-[1] text-left text-mid text-black font-inter">
      <div className="w-[238.5px] h-[511px] relative bg-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] hidden" />
      <img
        className="self-stretch h-[385.3px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className="relative capitalize font-medium z-[1]">
        {sacramentoRiverCats}
      </div>
      <div className="self-stretch rounded-sm bg-whitesmoke flex flex-row items-start justify-start pt-3 px-2.5 pb-[11px] gap-[39.2px] z-[1] text-xs text-dimgray-100">
        <div className="h-[54px] w-[218.4px] relative rounded-sm bg-whitesmoke hidden" />
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="h-[9px] relative capitalize inline-block min-w-[70.5px] z-[1]">
            total events
          </div>
          <div className="h-2.5 relative text-sm capitalize font-medium text-black inline-block min-w-[67.4px] z-[1]">
            {events}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="h-[9px] relative capitalize inline-block min-w-[32.2px] z-[1]">
            sport
          </div>
          <div
            className="h-2.5 relative text-sm capitalize font-medium text-black inline-block min-w-[57.4px] z-[1]"
            style={baseball1Style}
          >
            {baseball}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
