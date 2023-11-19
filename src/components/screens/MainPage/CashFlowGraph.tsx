import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { lightGreen, leafGreen } from "../../../constants/colors";
import {
  CASH_FLOW_GRAPH_BADGES,
  CASH_FLOW_GRAPH_LABELS,
} from "../../../constants/dasboard";
import useWindowResize from "../../../hooks/useWindowResize";
import ColorBadge from "../../atoms/ColorBadge";

const d3 = require("d3");
const MARGIN = 16;
const BAR_WIDTH = 12;

const CashFlowGraph = (
  props: PropsWithChildren<{
    data: { inFlowData: number[]; outFlowData: number[] };
  }>
) => {
  const { data = { inFlowData: [], outFlowData: [] } } = props;
  const svgRef = useRef<SVGSVGElement>(null);
  const boxRef = useRef<any>(null);

  const drawCashFlowGraph = useCallback(() => {
    const w = boxRef.current.clientWidth - MARGIN;
    const h = boxRef.current.clientHeight - MARGIN;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    // cleanup
    svg.selectAll("g").remove();

    // x scale
    const xScale = d3.scaleBand().domain(CASH_FLOW_GRAPH_LABELS).range([0, w]);

    const maxNumber = Math.floor(1.2 * Math.max(...data.inFlowData));
    // y scale
    const yScale = d3.scaleLinear().domain([0, maxNumber]).range([h, 0]);

    // x axis generator
    const xAxisGenerator = d3.axisBottom(xScale).ticks(data.inFlowData.length);

    const xAxis = svg
      .append("g")
      .call(xAxisGenerator)
      .attr("transform", `translate(0,${h})`);

    xAxis.select(".domain").remove();
    xAxis.selectAll(".tick line").attr("display", "none");

    svg
      .append("g")
      .attr("fill", leafGreen)
      .selectAll()
      .data(data.inFlowData)
      .join("rect")
      .attr(
        "x",
        (d: any, i: number) =>
          xScale(CASH_FLOW_GRAPH_LABELS[i]) - BAR_WIDTH / 2 + xScale.step() / 2
      )
      .attr("y", (d: any) => yScale(d))
      .attr("height", (d: any) => yScale(0) - yScale(d))
      .attr("width", BAR_WIDTH)
      .attr("rx", "4")
      .attr("ry", "4");

    svg
      .append("g")
      .attr("fill", lightGreen)
      .selectAll()
      .data(data.outFlowData)
      .join("rect")
      .attr(
        "x",
        (d: any, i: number) =>
          xScale(CASH_FLOW_GRAPH_LABELS[i]) - BAR_WIDTH / 2 + xScale.step() / 2
      )
      .attr("y", (d: any) => yScale(d))
      .attr("height", (d: any) => yScale(0) - yScale(d))
      .attr("width", BAR_WIDTH)
      .attr("rx", "4")
      .attr("ry", "4")
      .attr("class", "shadow");
  }, [data]);

  useEffect(() => {
    drawCashFlowGraph();
  }, [data, drawCashFlowGraph]);

  useWindowResize({ callback: drawCashFlowGraph });

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        width: "49%",
        height: "20rem",
        minWidth: "400px",
        minHeight: "300px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
          Total cash flow
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {CASH_FLOW_GRAPH_BADGES.map((badge) => {
            return <ColorBadge key={badge.label} {...badge} />;
          })}
        </Box>
      </Box>
      <Divider />
      <Box ref={boxRef} sx={{ margin: `${MARGIN}px`, flex: 1 }}>
        <svg ref={svgRef}></svg>
      </Box>
    </Box>
  );
};

export default CashFlowGraph;
