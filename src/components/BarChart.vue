<template>
  <div>
    <h2>Selected Characters vs. Unselected Characters</h2>
    <div id="graphic"></div>
  </div>
</template>

<script>
  import * as d3 from 'd3-3';
  
  export default {
    props: {
      selections: {
        type: Array,
        required: true,
      },
    },

    data() {
      return {
        chartData: this.selections
      };
    },

    mounted() {
      const sortedData = this.chartData.sort(function (a, b) {
        return d3.ascending(a.count, b.count);
        });
      
      //set up svg using margin conventions - we'll need plenty of room on the left for labels
      var margin = {
          top: 15,
          right: 25,
          bottom: 15,
          left: 60
      };

      var width = 800 - margin.left - margin.right,
        height = 375 - margin.top - margin.bottom;

      var svg = d3.select("#graphic").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var x = d3.scale.linear()
        .range([0, width])
        .domain([0, d3.max(sortedData, function (d) {
            return d.count;
        })]);

      var y = d3.scale.ordinal()
        .rangeRoundBands([height, 0], .1)
        .domain(sortedData.map(function (d) {
            return d.name;
        }));

      //make y axis to show bar names
      var yAxis = d3.svg.axis()
        .scale(y)
        //no tick marks
        .tickSize(0)
        .orient("left");

      var gy = svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)

      var bars = svg.selectAll(".bar")
        .data(sortedData)
        .enter()
        .append("g")

      //append rects
      bars.append("rect")
        .attr("class", "bar")
        .attr("y", function (d) {
            return y(d.name);
        })
        .attr("height", y.rangeBand())
        .attr("x", 0)
        .attr("width", function (d) {
            return x(d.count);
        });

      //add a value label to the right of each bar
      bars.append("text")
        .attr("class", "label")
        //y position of the label is halfway down the bar
        .attr("y", function (d) {
            return y(d.name) + y.rangeBand() / 2 + 4;
        })
        //x position is 3 pixels to the right of the bar
        .attr("x", function (d) {
            return x(d.count) + 3;
        })
        .text(function (d) {
            return d.count;
        });
    }
  };
</script>

<style>
  body {
    font-family: "Arial", sans-serif;
  }
  
  .bar {
    fill: #5f89ad;
  }
  
  .axis {
    font-size: 13px;
  }
  
  .axis path,
  .axis line {
      fill: none;
      display: none;
  }
  
  .label {
    font-size: 13px;
  }
</style>
