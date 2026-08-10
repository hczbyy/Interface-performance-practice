/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 573.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 8.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 10.0], [17.8, 10.0], [17.9, 10.0], [18.0, 10.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 10.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 10.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 11.0], [25.1, 11.0], [25.2, 11.0], [25.3, 11.0], [25.4, 11.0], [25.5, 11.0], [25.6, 11.0], [25.7, 11.0], [25.8, 11.0], [25.9, 11.0], [26.0, 11.0], [26.1, 11.0], [26.2, 11.0], [26.3, 11.0], [26.4, 11.0], [26.5, 11.0], [26.6, 11.0], [26.7, 11.0], [26.8, 11.0], [26.9, 11.0], [27.0, 11.0], [27.1, 11.0], [27.2, 11.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 12.0], [32.6, 12.0], [32.7, 12.0], [32.8, 12.0], [32.9, 12.0], [33.0, 12.0], [33.1, 12.0], [33.2, 12.0], [33.3, 12.0], [33.4, 12.0], [33.5, 12.0], [33.6, 12.0], [33.7, 12.0], [33.8, 12.0], [33.9, 12.0], [34.0, 12.0], [34.1, 12.0], [34.2, 12.0], [34.3, 12.0], [34.4, 12.0], [34.5, 12.0], [34.6, 12.0], [34.7, 12.0], [34.8, 12.0], [34.9, 12.0], [35.0, 12.0], [35.1, 12.0], [35.2, 12.0], [35.3, 12.0], [35.4, 12.0], [35.5, 12.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 13.0], [36.4, 13.0], [36.5, 13.0], [36.6, 13.0], [36.7, 13.0], [36.8, 13.0], [36.9, 13.0], [37.0, 13.0], [37.1, 13.0], [37.2, 13.0], [37.3, 13.0], [37.4, 13.0], [37.5, 13.0], [37.6, 13.0], [37.7, 13.0], [37.8, 13.0], [37.9, 13.0], [38.0, 13.0], [38.1, 13.0], [38.2, 13.0], [38.3, 13.0], [38.4, 13.0], [38.5, 13.0], [38.6, 13.0], [38.7, 13.0], [38.8, 13.0], [38.9, 13.0], [39.0, 13.0], [39.1, 13.0], [39.2, 13.0], [39.3, 13.0], [39.4, 13.0], [39.5, 13.0], [39.6, 13.0], [39.7, 13.0], [39.8, 13.0], [39.9, 13.0], [40.0, 13.0], [40.1, 13.0], [40.2, 13.0], [40.3, 13.0], [40.4, 13.0], [40.5, 13.0], [40.6, 13.0], [40.7, 13.0], [40.8, 13.0], [40.9, 13.0], [41.0, 13.0], [41.1, 13.0], [41.2, 13.0], [41.3, 13.0], [41.4, 13.0], [41.5, 13.0], [41.6, 13.0], [41.7, 13.0], [41.8, 13.0], [41.9, 14.0], [42.0, 14.0], [42.1, 14.0], [42.2, 14.0], [42.3, 14.0], [42.4, 14.0], [42.5, 14.0], [42.6, 14.0], [42.7, 14.0], [42.8, 14.0], [42.9, 14.0], [43.0, 14.0], [43.1, 14.0], [43.2, 14.0], [43.3, 14.0], [43.4, 14.0], [43.5, 14.0], [43.6, 14.0], [43.7, 14.0], [43.8, 14.0], [43.9, 14.0], [44.0, 14.0], [44.1, 14.0], [44.2, 14.0], [44.3, 14.0], [44.4, 14.0], [44.5, 14.0], [44.6, 14.0], [44.7, 14.0], [44.8, 14.0], [44.9, 14.0], [45.0, 14.0], [45.1, 14.0], [45.2, 14.0], [45.3, 14.0], [45.4, 14.0], [45.5, 14.0], [45.6, 14.0], [45.7, 14.0], [45.8, 14.0], [45.9, 14.0], [46.0, 14.0], [46.1, 14.0], [46.2, 14.0], [46.3, 14.0], [46.4, 14.0], [46.5, 14.0], [46.6, 14.0], [46.7, 14.0], [46.8, 14.0], [46.9, 14.0], [47.0, 14.0], [47.1, 14.0], [47.2, 14.0], [47.3, 14.0], [47.4, 14.0], [47.5, 14.0], [47.6, 15.0], [47.7, 15.0], [47.8, 15.0], [47.9, 15.0], [48.0, 15.0], [48.1, 15.0], [48.2, 15.0], [48.3, 15.0], [48.4, 15.0], [48.5, 15.0], [48.6, 15.0], [48.7, 15.0], [48.8, 15.0], [48.9, 15.0], [49.0, 15.0], [49.1, 15.0], [49.2, 15.0], [49.3, 15.0], [49.4, 15.0], [49.5, 15.0], [49.6, 15.0], [49.7, 15.0], [49.8, 15.0], [49.9, 15.0], [50.0, 15.0], [50.1, 15.0], [50.2, 15.0], [50.3, 15.0], [50.4, 15.0], [50.5, 15.0], [50.6, 15.0], [50.7, 15.0], [50.8, 15.0], [50.9, 15.0], [51.0, 15.0], [51.1, 15.0], [51.2, 15.0], [51.3, 15.0], [51.4, 15.0], [51.5, 15.0], [51.6, 15.0], [51.7, 15.0], [51.8, 15.0], [51.9, 15.0], [52.0, 15.0], [52.1, 15.0], [52.2, 15.0], [52.3, 15.0], [52.4, 15.0], [52.5, 15.0], [52.6, 15.0], [52.7, 15.0], [52.8, 15.0], [52.9, 16.0], [53.0, 16.0], [53.1, 16.0], [53.2, 16.0], [53.3, 16.0], [53.4, 16.0], [53.5, 16.0], [53.6, 16.0], [53.7, 16.0], [53.8, 16.0], [53.9, 16.0], [54.0, 16.0], [54.1, 16.0], [54.2, 16.0], [54.3, 16.0], [54.4, 16.0], [54.5, 16.0], [54.6, 16.0], [54.7, 16.0], [54.8, 16.0], [54.9, 16.0], [55.0, 16.0], [55.1, 16.0], [55.2, 16.0], [55.3, 16.0], [55.4, 16.0], [55.5, 16.0], [55.6, 16.0], [55.7, 16.0], [55.8, 16.0], [55.9, 16.0], [56.0, 16.0], [56.1, 16.0], [56.2, 16.0], [56.3, 16.0], [56.4, 16.0], [56.5, 16.0], [56.6, 16.0], [56.7, 16.0], [56.8, 16.0], [56.9, 16.0], [57.0, 16.0], [57.1, 16.0], [57.2, 16.0], [57.3, 16.0], [57.4, 16.0], [57.5, 17.0], [57.6, 17.0], [57.7, 17.0], [57.8, 17.0], [57.9, 17.0], [58.0, 17.0], [58.1, 17.0], [58.2, 17.0], [58.3, 17.0], [58.4, 17.0], [58.5, 17.0], [58.6, 17.0], [58.7, 17.0], [58.8, 17.0], [58.9, 17.0], [59.0, 17.0], [59.1, 17.0], [59.2, 17.0], [59.3, 17.0], [59.4, 17.0], [59.5, 17.0], [59.6, 17.0], [59.7, 17.0], [59.8, 17.0], [59.9, 17.0], [60.0, 17.0], [60.1, 17.0], [60.2, 17.0], [60.3, 17.0], [60.4, 17.0], [60.5, 17.0], [60.6, 17.0], [60.7, 17.0], [60.8, 17.0], [60.9, 17.0], [61.0, 17.0], [61.1, 17.0], [61.2, 17.0], [61.3, 17.0], [61.4, 17.0], [61.5, 17.0], [61.6, 17.0], [61.7, 17.0], [61.8, 18.0], [61.9, 18.0], [62.0, 18.0], [62.1, 18.0], [62.2, 18.0], [62.3, 18.0], [62.4, 18.0], [62.5, 18.0], [62.6, 18.0], [62.7, 18.0], [62.8, 18.0], [62.9, 18.0], [63.0, 18.0], [63.1, 18.0], [63.2, 18.0], [63.3, 18.0], [63.4, 18.0], [63.5, 18.0], [63.6, 18.0], [63.7, 18.0], [63.8, 18.0], [63.9, 18.0], [64.0, 18.0], [64.1, 18.0], [64.2, 18.0], [64.3, 18.0], [64.4, 18.0], [64.5, 18.0], [64.6, 18.0], [64.7, 18.0], [64.8, 18.0], [64.9, 18.0], [65.0, 18.0], [65.1, 18.0], [65.2, 18.0], [65.3, 18.0], [65.4, 18.0], [65.5, 18.0], [65.6, 19.0], [65.7, 19.0], [65.8, 19.0], [65.9, 19.0], [66.0, 19.0], [66.1, 19.0], [66.2, 19.0], [66.3, 19.0], [66.4, 19.0], [66.5, 19.0], [66.6, 19.0], [66.7, 19.0], [66.8, 19.0], [66.9, 19.0], [67.0, 19.0], [67.1, 19.0], [67.2, 19.0], [67.3, 19.0], [67.4, 19.0], [67.5, 19.0], [67.6, 19.0], [67.7, 19.0], [67.8, 19.0], [67.9, 19.0], [68.0, 19.0], [68.1, 19.0], [68.2, 19.0], [68.3, 19.0], [68.4, 19.0], [68.5, 19.0], [68.6, 19.0], [68.7, 19.0], [68.8, 19.0], [68.9, 20.0], [69.0, 20.0], [69.1, 20.0], [69.2, 20.0], [69.3, 20.0], [69.4, 20.0], [69.5, 20.0], [69.6, 20.0], [69.7, 20.0], [69.8, 20.0], [69.9, 20.0], [70.0, 20.0], [70.1, 20.0], [70.2, 20.0], [70.3, 20.0], [70.4, 20.0], [70.5, 20.0], [70.6, 20.0], [70.7, 20.0], [70.8, 20.0], [70.9, 20.0], [71.0, 20.0], [71.1, 20.0], [71.2, 20.0], [71.3, 20.0], [71.4, 20.0], [71.5, 20.0], [71.6, 20.0], [71.7, 20.0], [71.8, 20.0], [71.9, 21.0], [72.0, 21.0], [72.1, 21.0], [72.2, 21.0], [72.3, 21.0], [72.4, 21.0], [72.5, 21.0], [72.6, 21.0], [72.7, 21.0], [72.8, 21.0], [72.9, 21.0], [73.0, 21.0], [73.1, 21.0], [73.2, 21.0], [73.3, 21.0], [73.4, 21.0], [73.5, 21.0], [73.6, 21.0], [73.7, 21.0], [73.8, 21.0], [73.9, 21.0], [74.0, 21.0], [74.1, 21.0], [74.2, 21.0], [74.3, 21.0], [74.4, 21.0], [74.5, 21.0], [74.6, 22.0], [74.7, 22.0], [74.8, 22.0], [74.9, 22.0], [75.0, 22.0], [75.1, 22.0], [75.2, 22.0], [75.3, 22.0], [75.4, 22.0], [75.5, 22.0], [75.6, 22.0], [75.7, 22.0], [75.8, 22.0], [75.9, 22.0], [76.0, 22.0], [76.1, 22.0], [76.2, 22.0], [76.3, 22.0], [76.4, 22.0], [76.5, 22.0], [76.6, 22.0], [76.7, 22.0], [76.8, 22.0], [76.9, 22.0], [77.0, 23.0], [77.1, 23.0], [77.2, 23.0], [77.3, 23.0], [77.4, 23.0], [77.5, 23.0], [77.6, 23.0], [77.7, 23.0], [77.8, 23.0], [77.9, 23.0], [78.0, 23.0], [78.1, 23.0], [78.2, 23.0], [78.3, 23.0], [78.4, 23.0], [78.5, 23.0], [78.6, 23.0], [78.7, 23.0], [78.8, 23.0], [78.9, 23.0], [79.0, 23.0], [79.1, 23.0], [79.2, 23.0], [79.3, 24.0], [79.4, 24.0], [79.5, 24.0], [79.6, 24.0], [79.7, 24.0], [79.8, 24.0], [79.9, 24.0], [80.0, 24.0], [80.1, 24.0], [80.2, 24.0], [80.3, 24.0], [80.4, 24.0], [80.5, 24.0], [80.6, 24.0], [80.7, 24.0], [80.8, 24.0], [80.9, 24.0], [81.0, 24.0], [81.1, 24.0], [81.2, 24.0], [81.3, 25.0], [81.4, 25.0], [81.5, 25.0], [81.6, 25.0], [81.7, 25.0], [81.8, 25.0], [81.9, 25.0], [82.0, 25.0], [82.1, 25.0], [82.2, 25.0], [82.3, 25.0], [82.4, 25.0], [82.5, 25.0], [82.6, 25.0], [82.7, 25.0], [82.8, 25.0], [82.9, 25.0], [83.0, 25.0], [83.1, 25.0], [83.2, 26.0], [83.3, 26.0], [83.4, 26.0], [83.5, 26.0], [83.6, 26.0], [83.7, 26.0], [83.8, 26.0], [83.9, 26.0], [84.0, 26.0], [84.1, 26.0], [84.2, 26.0], [84.3, 26.0], [84.4, 26.0], [84.5, 26.0], [84.6, 26.0], [84.7, 26.0], [84.8, 26.0], [84.9, 27.0], [85.0, 27.0], [85.1, 27.0], [85.2, 27.0], [85.3, 27.0], [85.4, 27.0], [85.5, 27.0], [85.6, 27.0], [85.7, 27.0], [85.8, 27.0], [85.9, 27.0], [86.0, 27.0], [86.1, 27.0], [86.2, 27.0], [86.3, 27.0], [86.4, 27.0], [86.5, 28.0], [86.6, 28.0], [86.7, 28.0], [86.8, 28.0], [86.9, 28.0], [87.0, 28.0], [87.1, 28.0], [87.2, 28.0], [87.3, 28.0], [87.4, 28.0], [87.5, 28.0], [87.6, 28.0], [87.7, 28.0], [87.8, 28.0], [87.9, 29.0], [88.0, 29.0], [88.1, 29.0], [88.2, 29.0], [88.3, 29.0], [88.4, 29.0], [88.5, 29.0], [88.6, 29.0], [88.7, 29.0], [88.8, 29.0], [88.9, 29.0], [89.0, 29.0], [89.1, 30.0], [89.2, 30.0], [89.3, 30.0], [89.4, 30.0], [89.5, 30.0], [89.6, 30.0], [89.7, 30.0], [89.8, 30.0], [89.9, 30.0], [90.0, 30.0], [90.1, 31.0], [90.2, 31.0], [90.3, 31.0], [90.4, 31.0], [90.5, 31.0], [90.6, 31.0], [90.7, 31.0], [90.8, 31.0], [90.9, 31.0], [91.0, 31.0], [91.1, 32.0], [91.2, 32.0], [91.3, 32.0], [91.4, 32.0], [91.5, 32.0], [91.6, 32.0], [91.7, 32.0], [91.8, 32.0], [91.9, 33.0], [92.0, 33.0], [92.1, 33.0], [92.2, 33.0], [92.3, 33.0], [92.4, 33.0], [92.5, 33.0], [92.6, 34.0], [92.7, 34.0], [92.8, 34.0], [92.9, 34.0], [93.0, 34.0], [93.1, 34.0], [93.2, 35.0], [93.3, 35.0], [93.4, 35.0], [93.5, 35.0], [93.6, 35.0], [93.7, 36.0], [93.8, 36.0], [93.9, 36.0], [94.0, 36.0], [94.1, 36.0], [94.2, 37.0], [94.3, 37.0], [94.4, 37.0], [94.5, 37.0], [94.6, 38.0], [94.7, 38.0], [94.8, 38.0], [94.9, 38.0], [95.0, 39.0], [95.1, 39.0], [95.2, 39.0], [95.3, 39.0], [95.4, 40.0], [95.5, 40.0], [95.6, 40.0], [95.7, 41.0], [95.8, 41.0], [95.9, 41.0], [96.0, 42.0], [96.1, 42.0], [96.2, 42.0], [96.3, 43.0], [96.4, 43.0], [96.5, 44.0], [96.6, 44.0], [96.7, 45.0], [96.8, 45.0], [96.9, 46.0], [97.0, 46.0], [97.1, 47.0], [97.2, 47.0], [97.3, 48.0], [97.4, 49.0], [97.5, 50.0], [97.6, 50.0], [97.7, 51.0], [97.8, 52.0], [97.9, 53.0], [98.0, 54.0], [98.1, 56.0], [98.2, 57.0], [98.3, 59.0], [98.4, 61.0], [98.5, 63.0], [98.6, 65.0], [98.7, 68.0], [98.8, 71.0], [98.9, 76.0], [99.0, 81.0], [99.1, 87.0], [99.2, 99.0], [99.3, 110.0], [99.4, 124.0], [99.5, 142.0], [99.6, 163.0], [99.7, 190.0], [99.8, 243.0], [99.9, 344.0]], "isOverall": false, "label": "小说列表", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 23.0, "minX": 0.0, "maxY": 114377.0, "series": [{"data": [[0.0, 114377.0], [300.0, 85.0], [100.0, 591.0], [200.0, 164.0], [400.0, 54.0], [500.0, 23.0]], "isOverall": false, "label": "小说列表", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 23.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 115271.0, "series": [{"data": [[0.0, 115271.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 97.06432441880793, "minX": 1.78533486E12, "maxY": 240.0, "series": [{"data": [[1.78533486E12, 97.06432441880793], [1.78533498E12, 240.0], [1.78533492E12, 238.63560697634273], [1.7853351E12, 238.72921192110505], [1.78533504E12, 240.0]], "isOverall": false, "label": "定时器 查询 100/150/300/600/550/520", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7853351E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 8.6, "minX": 1.0, "maxY": 347.3846153846153, "series": [{"data": [[2.0, 9.833333333333334], [3.0, 8.6], [4.0, 10.772727272727275], [5.0, 12.458333333333334], [6.0, 12.851851851851853], [7.0, 14.458333333333336], [8.0, 14.9], [9.0, 18.333333333333336], [10.0, 17.343749999999996], [11.0, 18.42307692307692], [12.0, 27.14814814814815], [13.0, 22.470588235294116], [14.0, 18.633333333333333], [15.0, 23.93103448275862], [16.0, 32.39285714285713], [17.0, 25.12820512820513], [18.0, 12.935483870967738], [19.0, 14.333333333333334], [20.0, 15.205882352941176], [21.0, 14.387096774193548], [22.0, 14.909090909090908], [23.0, 13.392857142857144], [24.0, 13.794117647058824], [25.0, 16.75862068965517], [26.0, 15.38888888888889], [27.0, 13.592592592592592], [28.0, 49.88888888888889], [29.0, 62.473684210526315], [30.0, 76.44444444444444], [31.0, 57.94871794871796], [32.0, 49.559999999999995], [33.0, 38.32558139534884], [34.0, 25.999999999999996], [35.0, 30.454545454545453], [36.0, 33.37500000000001], [37.0, 38.56756756756757], [38.0, 31.34375000000001], [39.0, 44.3888888888889], [40.0, 38.17857142857142], [41.0, 43.25], [42.0, 50.1875], [43.0, 55.78947368421052], [44.0, 45.4375], [45.0, 82.42307692307692], [46.0, 68.3953488372093], [47.0, 57.3235294117647], [48.0, 54.48148148148149], [49.0, 48.20454545454546], [50.0, 23.44736842105263], [51.0, 17.21212121212121], [52.0, 17.799999999999997], [53.0, 12.26470588235294], [54.0, 13.750000000000002], [55.0, 11.285714285714285], [56.0, 22.406249999999996], [57.0, 14.433333333333335], [58.0, 17.212121212121207], [59.0, 21.45454545454545], [60.0, 14.666666666666668], [61.0, 14.342857142857147], [62.0, 12.580645161290324], [63.0, 15.294117647058826], [64.0, 13.896551724137929], [65.0, 21.74193548387097], [66.0, 13.228571428571428], [67.0, 18.419354838709676], [68.0, 20.17647058823529], [69.0, 15.40625], [70.0, 16.761904761904763], [71.0, 34.63333333333333], [72.0, 33.08333333333332], [73.0, 23.225], [74.0, 23.090909090909083], [75.0, 24.766666666666666], [76.0, 20.818181818181817], [77.0, 50.476190476190474], [78.0, 51.39534883720931], [79.0, 36.44736842105262], [80.0, 25.97058823529412], [81.0, 19.642857142857142], [82.0, 27.250000000000004], [83.0, 35.81818181818181], [84.0, 28.6], [85.0, 19.555555555555557], [86.0, 15.333333333333332], [87.0, 22.303030303030305], [88.0, 12.656249999999998], [89.0, 12.766666666666667], [90.0, 16.416666666666664], [91.0, 15.040000000000003], [92.0, 45.46153846153846], [93.0, 75.10526315789473], [94.0, 86.44444444444444], [95.0, 56.67857142857142], [96.0, 27.536585365853664], [97.0, 13.285714285714286], [98.0, 10.70967741935484], [99.0, 21.1875], [100.0, 18.785714285714285], [101.0, 16.257142857142856], [102.0, 14.000000000000002], [103.0, 18.205882352941178], [104.0, 13.846153846153845], [105.0, 9.791666666666666], [106.0, 20.45945945945946], [107.0, 13.548387096774194], [108.0, 12.66666666666667], [109.0, 16.650000000000002], [110.0, 23.951219512195124], [111.0, 16.441176470588232], [112.0, 18.548387096774196], [113.0, 28.967741935483875], [114.0, 18.210526315789473], [115.0, 14.23529411764706], [116.0, 10.571428571428571], [117.0, 21.026315789473685], [118.0, 14.0], [119.0, 14.250000000000004], [120.0, 12.772727272727273], [121.0, 20.673913043478258], [122.0, 12.464285714285715], [123.0, 16.416666666666668], [124.0, 12.48], [125.0, 19.34285714285714], [126.0, 14.055555555555555], [127.0, 15.636363636363633], [128.0, 11.5], [129.0, 18.142857142857153], [130.0, 13.270270270270272], [131.0, 15.9375], [132.0, 13.192307692307693], [133.0, 30.037037037037038], [134.0, 18.38095238095239], [135.0, 16.848484848484848], [136.0, 14.677419354838708], [137.0, 14.740740740740739], [138.0, 13.799999999999997], [139.0, 21.111111111111114], [140.0, 16.83870967741936], [141.0, 11.758620689655176], [142.0, 21.111111111111107], [143.0, 12.612903225806454], [144.0, 16.366666666666667], [145.0, 16.281249999999996], [146.0, 15.499999999999998], [147.0, 33.17857142857143], [148.0, 41.28], [149.0, 44.99999999999999], [150.0, 24.916666666666668], [151.0, 12.192307692307692], [152.0, 17.589743589743588], [153.0, 13.966666666666667], [154.0, 20.82142857142857], [155.0, 18.05263157894737], [156.0, 14.925925925925926], [157.0, 20.028571428571436], [158.0, 12.454545454545457], [159.0, 14.636363636363638], [160.0, 14.129032258064516], [161.0, 11.65625], [162.0, 17.000000000000004], [163.0, 18.25], [164.0, 15.399999999999999], [165.0, 14.586206896551724], [166.0, 12.241379310344827], [167.0, 18.400000000000002], [168.0, 11.91304347826087], [169.0, 19.08108108108108], [170.0, 18.1], [171.0, 14.727272727272725], [172.0, 13.826086956521737], [173.0, 31.634146341463413], [174.0, 16.0], [175.0, 13.392857142857142], [176.0, 15.108108108108109], [177.0, 11.551724137931037], [178.0, 16.153846153846157], [180.0, 115.75000000000001], [181.0, 123.46153846153847], [182.0, 143.8148148148148], [183.0, 167.61290322580643], [179.0, 36.0], [184.0, 186.77777777777777], [185.0, 199.89473684210523], [186.0, 224.0952380952381], [187.0, 241.9], [188.0, 302.77777777777777], [189.0, 347.3846153846153], [190.0, 316.7826086956522], [191.0, 293.296875], [192.0, 193.69696969696966], [193.0, 293.30357142857144], [194.0, 186.33783783783792], [195.0, 128.3389830508475], [196.0, 67.45098039215686], [197.0, 26.999999999999996], [198.0, 18.000000000000007], [199.0, 15.538461538461538], [200.0, 18.67441860465116], [201.0, 10.919999999999998], [202.0, 13.8], [203.0, 11.214285714285715], [204.0, 19.0], [205.0, 13.129032258064516], [206.0, 13.63888888888889], [207.0, 12.393939393939393], [208.0, 10.857142857142858], [209.0, 14.89473684210526], [210.0, 14.03448275862069], [211.0, 17.166666666666668], [212.0, 14.785714285714286], [213.0, 17.205128205128204], [214.0, 13.382352941176471], [215.0, 10.120000000000001], [216.0, 14.529411764705882], [217.0, 15.6], [218.0, 17.388888888888896], [219.0, 15.448275862068963], [220.0, 23.28947368421053], [221.0, 14.749999999999998], [222.0, 11.88], [223.0, 28.54285714285714], [224.0, 27.040000000000003], [225.0, 29.59090909090909], [226.0, 13.939393939393941], [227.0, 14.999999999999998], [228.0, 16.432432432432435], [229.0, 11.642857142857144], [230.0, 11.540540540540542], [231.0, 13.928571428571429], [232.0, 14.705882352941178], [233.0, 14.941176470588236], [234.0, 15.40740740740741], [235.0, 27.199999999999996], [236.0, 14.722222222222229], [237.0, 10.75], [238.0, 14.365853658536581], [239.0, 15.96875], [240.0, 18.101786625829426], [1.0, 25.0]], "isOverall": false, "label": "小说列表", "isController": false}, {"data": [[232.31102225614853, 19.24225024719443]], "isOverall": false, "label": "小说列表-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 240.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.78533486E12, "maxY": 1812097.0833333333, "series": [{"data": [[1.78533486E12, 358039.25], [1.78533498E12, 1800954.8333333333], [1.78533492E12, 1812097.0833333333], [1.7853351E12, 1440543.1666666667], [1.78533504E12, 1803839.4166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78533486E12, 0.0], [1.78533498E12, 0.0], [1.78533492E12, 0.0], [1.7853351E12, 0.0], [1.78533504E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7853351E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 17.10363251569929, "minX": 1.78533486E12, "maxY": 36.02814193322843, "series": [{"data": [[1.78533486E12, 36.02814193322843], [1.78533498E12, 20.788720158459885], [1.78533492E12, 18.17022966672419], [1.7853351E12, 17.16330697714822], [1.78533504E12, 17.10363251569929]], "isOverall": false, "label": "小说列表", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7853351E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 17.093883357041307, "minX": 1.78533486E12, "maxY": 35.991959447649116, "series": [{"data": [[1.78533486E12, 35.991959447649116], [1.78533498E12, 20.774229419327813], [1.78533492E12, 18.157278535658797], [1.7853351E12, 17.153227908593365], [1.78533504E12, 17.093883357041307]], "isOverall": false, "label": "小说列表", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7853351E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78533486E12, "maxY": 4.9E-324, "series": [{"data": [[1.78533486E12, 0.0], [1.78533498E12, 0.0], [1.78533492E12, 0.0], [1.7853351E12, 0.0], [1.78533504E12, 0.0]], "isOverall": false, "label": "小说列表", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7853351E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.78533486E12, "maxY": 573.0, "series": [{"data": [[1.78533486E12, 573.0], [1.78533498E12, 521.0], [1.78533492E12, 555.0], [1.7853351E12, 85.0], [1.78533504E12, 270.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78533486E12, 61.0], [1.78533498E12, 32.0], [1.78533492E12, 29.0], [1.7853351E12, 29.0], [1.78533504E12, 27.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78533486E12, 345.77999999999975], [1.78533498E12, 60.0], [1.78533492E12, 52.0], [1.7853351E12, 46.0], [1.78533504E12, 75.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78533486E12, 132.0], [1.78533498E12, 39.0], [1.78533492E12, 35.0], [1.7853351E12, 34.0], [1.78533504E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.78533486E12, 5.0], [1.78533498E12, 5.0], [1.78533492E12, 5.0], [1.7853351E12, 5.0], [1.78533504E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78533486E12, 18.0], [1.78533498E12, 15.0], [1.78533492E12, 15.0], [1.7853351E12, 15.0], [1.78533504E12, 14.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7853351E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7.5, "minX": 8.0, "maxY": 205.0, "series": [{"data": [[559.0, 25.0], [602.0, 20.0], [8.0, 7.5], [365.0, 205.0], [413.0, 124.0], [438.0, 17.0], [462.0, 16.0], [461.0, 15.0], [460.0, 15.0], [463.0, 14.0], [457.0, 15.0], [478.0, 15.0], [465.0, 20.0], [475.0, 16.0], [468.0, 16.0], [469.0, 14.0], [477.0, 15.0], [476.0, 17.0], [466.0, 14.0], [467.0, 19.0], [474.0, 16.0], [479.0, 14.0], [473.0, 15.0], [472.0, 15.0], [471.0, 14.0], [470.0, 14.0], [483.0, 16.0], [487.0, 14.0], [484.0, 16.0], [493.0, 15.0], [495.0, 15.0], [492.0, 14.0], [481.0, 15.0], [482.0, 15.0], [480.0, 15.0], [486.0, 15.0], [485.0, 14.0], [488.0, 14.0], [491.0, 14.0], [489.0, 13.0], [490.0, 14.0], [499.0, 15.0], [505.0, 22.0], [502.0, 14.0], [506.0, 15.0], [497.0, 15.0], [496.0, 16.0], [498.0, 24.0], [504.0, 17.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 602.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 7.5, "minX": 8.0, "maxY": 205.0, "series": [{"data": [[559.0, 25.0], [602.0, 20.0], [8.0, 7.5], [365.0, 205.0], [413.0, 124.0], [438.0, 17.0], [462.0, 16.0], [461.0, 15.0], [460.0, 15.0], [463.0, 14.0], [457.0, 15.0], [478.0, 15.0], [465.0, 20.0], [475.0, 16.0], [468.0, 16.0], [469.0, 14.0], [477.0, 15.0], [476.0, 17.0], [466.0, 14.0], [467.0, 19.0], [474.0, 16.0], [479.0, 14.0], [473.0, 15.0], [472.0, 15.0], [471.0, 14.0], [470.0, 14.0], [483.0, 16.0], [487.0, 14.0], [484.0, 16.0], [493.0, 15.0], [495.0, 15.0], [492.0, 14.0], [481.0, 15.0], [482.0, 15.0], [480.0, 15.0], [486.0, 15.0], [485.0, 14.0], [488.0, 14.0], [491.0, 14.0], [489.0, 13.0], [490.0, 14.0], [499.0, 15.0], [505.0, 22.0], [502.0, 14.0], [506.0, 15.0], [497.0, 15.0], [496.0, 16.0], [498.0, 24.0], [504.0, 17.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 602.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 97.33333333333333, "minX": 1.78533486E12, "maxY": 480.68333333333334, "series": [{"data": [[1.78533486E12, 97.33333333333333], [1.78533498E12, 480.0], [1.78533492E12, 480.68333333333334], [1.7853351E12, 383.55], [1.78533504E12, 480.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7853351E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 95.35, "minX": 1.78533486E12, "maxY": 482.5833333333333, "series": [{"data": [[1.78533486E12, 95.35], [1.78533498E12, 479.6166666666667], [1.78533492E12, 482.5833333333333], [1.7853351E12, 383.6333333333333], [1.78533504E12, 480.3833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7853351E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 95.35, "minX": 1.78533486E12, "maxY": 482.5833333333333, "series": [{"data": [[1.78533486E12, 95.35], [1.78533498E12, 479.6166666666667], [1.78533492E12, 482.5833333333333], [1.7853351E12, 383.6333333333333], [1.78533504E12, 480.3833333333333]], "isOverall": false, "label": "小说列表-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7853351E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 95.35, "minX": 1.78533486E12, "maxY": 482.5833333333333, "series": [{"data": [[1.78533486E12, 95.35], [1.78533498E12, 479.6166666666667], [1.78533492E12, 482.5833333333333], [1.7853351E12, 383.6333333333333], [1.78533504E12, 480.3833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7853351E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

