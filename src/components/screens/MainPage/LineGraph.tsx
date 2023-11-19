import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { lightGreen } from "../../../constants/colors";
import {
  Box,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { MONTHS } from "../../../constants/dasboard";
import { formatNumber } from "../../../utils";
import useWindowResize from "../../../hooks/useWindowResize";

const d3 = require("d3");
const MARGIN = 16;

const LineGraph = (props: PropsWithChildren<{ data: number[] }>) => {
  const { data = [] } = props;
  const [option, setOption] = useState<string>("manage");
  const [month, setMonth] = useState<string>(MONTHS[0]);
  const svgRef = useRef<SVGSVGElement>(null);
  const boxRef = useRef<any>(null);

  const drawLineGraph = useCallback(() => {
    // setting up svg
    const w = boxRef.current.clientWidth - MARGIN;
    const h = boxRef.current.clientHeight - MARGIN;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    // cleanup
    svg.selectAll("g").remove();
    svg.selectAll("path").remove();

    const maxNumber = Math.max(...data);

    // setting the scaling
    // xscales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    //yscales
    const yScale = d3
      .scaleLinear()
      .domain([0, Math.floor(1.3 * maxNumber)])
      .range([h, 0]);

    //  Setup functions to draw Lines ---------------//
    const generateScaledLine = d3
      .line()
      .x((d: any, i: number) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axes
    const xAxisGenerator = d3
      .axisBottom(xScale)
      .ticks(1 + data.length)
      .tickFormat((i: number) => formatNumber(i + 1));

    const xAxis = svg
      .append("g")
      .call(xAxisGenerator)
      .attr("transform", `translate(0,${h})`);

    xAxis.select(".domain").remove();
    xAxis.selectAll(".tick line").attr("display", "none");

    // setting up the data for the svg
    svg
      .selectAll()
      .data([data])
      .join("path")
      .attr("d", (d: any) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", lightGreen);
  }, [data]);

  useWindowResize({ callback: drawLineGraph });

  const handleOptionChange = (e: SelectChangeEvent<string>) => {
    setOption(e?.target?.value || "manage");
  };

  const handleMonthChange = (e: SelectChangeEvent<string>) => {
    setMonth(e?.target?.value || MONTHS[0]);
  };

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
          Checking account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Select
            id="option-select"
            value={option}
            onChange={handleOptionChange}
            sx={{
              fontWeight: "500",
            }}
            size="small"
          >
            <MenuItem value={"manage"}>Manage</MenuItem>
            <MenuItem value={"dashboard"}>Dashboard</MenuItem>
          </Select>
          <Select
            id="month-select"
            value={month}
            onChange={handleMonthChange}
            sx={{
              marginLeft: "1rem",
              fontWeight: "500",
            }}
            size="small"
          >
            {MONTHS.map((m) => {
              return (
                <MenuItem key={m} value={m}>
                  {m}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </Box>
      <Divider />
      <Box ref={boxRef} sx={{ margin: `${MARGIN}px`, flex: 1 }}>
        <svg ref={svgRef}></svg>
      </Box>
    </Box>
  );
};

export default LineGraph;
