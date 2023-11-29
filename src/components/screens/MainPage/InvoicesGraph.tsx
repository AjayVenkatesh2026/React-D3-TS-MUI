import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import {
  bgBlue,
  lightGreen,
  darkGreen,
  bgHoverBlue,
} from "../../../constants/colors";
import { INVOICE_GRAPH_LABELS } from "../../../constants/dasboard";
import useWindowResize from "../../../hooks/useWindowResize";
import styled from "@emotion/styled";

const d3 = require("d3");
const MARGIN = 16;
const BAR_WIDTH = 12;
const TOOLTIP_OFFSET = 8;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const InvoicesGraph = (props: PropsWithChildren<{ data: number[] }>) => {
  const { data = [] } = props;
  const svgRef = useRef<SVGSVGElement>(null);
  const boxRef = useRef<any>(null);
  const divRef = useRef<any>(null);

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
      .attr("ry", "4")
      .attr("value", (d: any) => `${d}`)
      .on("mouseenter", (event: any) => {
        if (divRef.current.style.visibility === "visible") {
          return;
        }

        const x = event?.pageX + TOOLTIP_OFFSET;
        const y = event?.pageY - TOOLTIP_OFFSET;
        const value = event?.target?.getAttribute("value");

        divRef.current.style.top = `${y}px`;
        divRef.current.style.left = `${x}px`;
        divRef.current.innerHTML = value;
        divRef.current.style.visibility = "visible";
      })
      .on("mousemove", (event: any) => {
        const x = event?.pageX + TOOLTIP_OFFSET;
        const y = event?.pageY - TOOLTIP_OFFSET;

        divRef.current.style.top = `${y}px`;
        divRef.current.style.left = `${x}px`;
      })
      .on("mouseout", () => {
        divRef.current.style.visibility = "hidden";
      });
  }, [data]);

  useEffect(() => {
    drawInvoicesGraph();
  }, [data, drawInvoicesGraph]);

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
        <Button
          component="label"
          variant="contained"
          sx={{
            padding: "4px 12px",
            borderRadius: "8px",
            backgroundColor: bgBlue,
            color: darkGreen,
            fontWeight: "600",
            fontSize: "0.9rem",
            textTransform: "initial",
            ":hover": {
              backgroundColor: bgHoverBlue,
            },
          }}
        >
          New Sales Invoice
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </Button>
      </Box>
      <Divider />
      <Box ref={boxRef} sx={{ margin: `${MARGIN}px`, flex: 1 }}>
        <div
          className="tooltip"
          ref={divRef}
          style={{
            position: "absolute",
            visibility: "hidden",
            zIndex: 10,
            color: "#333",
            fontWeight: "700",
            fontSize: "0.7rem",
          }}
        ></div>
        <svg ref={svgRef}></svg>
      </Box>
    </Box>
  );
};

export default InvoicesGraph;
