import { PropsWithChildren, useCallback, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { bgBlue, lightGreen, darkGreen } from "../../../constants/colors";
import { INVOICE_GRAPH_LABELS } from "../../../constants/dasboard";
import useWindowResize from "../../../hooks/useWindowResize";

const d3 = require("d3");
const MARGIN = 16;
const BAR_WIDTH = 12;

const InvoicesGraph = (props: PropsWithChildren<{ data: number[] }>) => {
  const { data = [] } = props;
  const svgRef = useRef<SVGSVGElement>(null);
  const boxRef = useRef<any>(null);

  const drawInvoicesGraph = useCallback(() => {
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
    const xScale = d3.scaleBand().domain(INVOICE_GRAPH_LABELS).range([0, w]);

    const maxNumber = Math.floor(1.2 * Math.max(...data));
    // y scale
    const yScale = d3.scaleLinear().domain([0, maxNumber]).range([h, 0]);

    // x axis generator
    const xAxisGenerator = d3.axisBottom(xScale).ticks(data.length);

    const xAxis = svg
      .append("g")
      .call(xAxisGenerator)
      .attr("transform", `translate(0,${h})`);

    xAxis.select(".domain").remove();
    xAxis.selectAll(".tick line").attr("display", "none");

    svg
      .append("g")
      .attr("fill", lightGreen)
      .selectAll()
      .data(data)
      .join("rect")
      .attr(
        "x",
        (d: any, i: number) =>
          xScale(INVOICE_GRAPH_LABELS[i]) - BAR_WIDTH / 2 + xScale.step() / 2
      )
      .attr("y", (d: any) => yScale(d))
      .attr("height", (d: any) => yScale(0) - yScale(d))
      .attr("width", BAR_WIDTH)
      .attr("rx", "4")
      .attr("ry", "4");
  }, [data]);

  useWindowResize({ callback: drawInvoicesGraph });

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
          Invoices owned to you
        </Typography>
        <Box
          sx={{
            padding: "4px 12px",
            borderRadius: "8px",
            backgroundColor: bgBlue,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: darkGreen, fontWeight: "600", fontSize: "0.9rem" }}
          >
            New Sales Invoice
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box ref={boxRef} sx={{ margin: `${MARGIN}px`, flex: 1 }}>
        <svg ref={svgRef}></svg>
      </Box>
    </Box>
  );
};

export default InvoicesGraph;
