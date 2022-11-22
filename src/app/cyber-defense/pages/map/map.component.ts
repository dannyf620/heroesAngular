import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import 'echarts-gl/dist/echarts-gl';
import 'echarts-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('mapRef') mapRef!: ElementRef;
  // @ts-ignore
  // @ts-ignore
  options: EChartsOption = {
    backgroundColor: '#000',
    "globe": {

      baseTexture: '/assets/starfield.jpg',
      heightTexture: '/assets/starfield.jpg',
      displacementScale: 0.5,
      "displacementQuality": "high",
      "shading": "realistic",
      // environment: '/assets/starfield.jpg',
      environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#00aaff' // Sky color
      }, {
        offset: 0.7, color: '#998866' // Ground color
      }, {
        offset: 1, color: '#998866' // Ground color
      }], false),
      "realisticMaterial": { "roughness": 0.9 },
      "postEffect": { "enable": true, "depthOfField": { "enable": false, "focalDistance": 150 } },
      "temporalSuperSampling": { "enable": true },
      "light": {
        "ambient": { "intensity": 0 },
        "main": { "intensity": 0.1, "shadow": false },
        "ambientCubemap": {
          texture: '/assets/pisa.hdr',
          "exposure": 1,
          "diffuseIntensity": 0.5,
          "specularIntensity": 2
        }
      },
      "viewControl": { "autoRotate": false,

        alpha: 100,
        beta: 100,
        targetCoord: [-79.305160, 9.507910]

      },
      "silent": true,
      zlevel: -20,
      globeOuterRadius: 200,
      // @ts-ignore
      // @ts-ignore
    },
    "series": [{

      // @ts-ignore
      "type": "lines3D",
      "name": "easyJet",
      "effect": {
        "show": true,
        period: 0.5,
        // @ts-ignore
        "trailWidth": 7,
        "trailLength": 1,
        "trailOpacity": 1,
        trailColor: "rgb(50, 50, 150)",
      },
      "lineStyle": { "width": 2, "color": "rgb(50, 50, 150)", "opacity": 0.5 },
      "blendMode": "lighter",
      "data": [
        [
          [-13.605225, 28.945464],
          [-74.089993, 4.685029]
        ],
        [
          [-13.605225, 28.945464],
          [-2.849722, 53.333611]
        ],
        [
          [27.156953, 38.292392],
          [-74.089993, 4.685029]
        ],
        [[-9.546311, 30.381353],
          [2.55, 49.012779]
        ], [[-9.546311, 30.381353], [-74.089993, 4.685029]], [[-9.546311, 30.381353], [5.090833, 45.726387]], [[-9.546311, 30.381353], [13.5225, 52.380001]], [[-4.499106, 36.6749], [-6.215833, 54.6575]], [[-4.499106, 36.6749], [-2.719089, 51.382669]], [[-4.499106, 36.6749], [7.529167, 47.59]], [[-4.499106, 36.6749], [2.55, 49.012779]], [[-4.499106, 36.6749], [-4.433056, 55.871944]], [[-4.499106, 36.6749], [6.10895, 46.238064]], [[-4.499106, 36.6749], [-74.089993, 4.685029]], [[-4.499106, 36.6749], [-2.849722, 53.333611]], [[-4.499106, 36.6749], [-0.368333, 51.874722]], [[-4.499106, 36.6749], [-2.27495, 53.353744]], [[-4.499106, 36.6749], [8.728111, 45.630606]], [[-4.499106, 36.6749], [-1.691667, 55.0375]], [[-4.499106, 36.6749], [0.695556, 51.571389]], [[-4.499106, 36.6749], [0.235, 51.885]], [[-4.499106, 36.6749], [13.5225, 52.380001]], [[8.290772, 40.632133], [8.728111, 45.630606]], [[8.802917, 41.923637], [7.529167, 47.59]], [[8.802917, 41.923637], [2.55, 49.012779]], [[8.802917, 41.923637], [6.10895, 46.238064]], [[8.802917, 41.923637], [-74.089993, 4.685029]], [[8.802917, 41.923637], [5.090833, 45.726387]], [[-0.558156, 38.282169], [-6.215833, 54.6575]], [[-0.558156, 38.282169], [-2.719089, 51.382669]], [[-0.558156, 38.282169], [7.529167, 47.59]], [[-0.558156, 38.282169], [-3.3725, 55.95]], [[-0.558156, 38.282169], [-4.433056, 55.871944]], [[-0.558156, 38.282169], [6.10895, 46.238064]], [[-0.558156, 38.282169], [-74.089993, 4.685029]], [[-0.558156, 38.282169], [-2.849722, 53.333611]], [[-0.558156, 38.282169], [-0.368333, 51.874722]], [[-0.558156, 38.282169], [-2.27495, 53.353744]]]
    },
      {

        // @ts-ignore
        "type": "lines3D",
        "name": "easyJet",
        "effect": {
          "show": true,
          period: 0.5,
          // @ts-ignore
          "trailWidth": 7,
          "trailLength": 1,
          "trailOpacity": 1,
          trailColor: "rgb(255, 10, 10)",
        },
        "lineStyle": { "width": 2, "color": "rgb(50, 50, 150)", "opacity": 0.5 },
        "blendMode": "lighter",
        "data": [
          [
            [-79.305160, 9.507910, 1],
            [-74.089993, 4.685029, 2]
          ],
          [
            [-79.305160, 9.507910],
            [-0.368333, 51.874722]
          ]],
        silent: true
      }]
  }

  constructor() {
  }

  ngOnInit(): void {
    const chartDom = document.getElementById('main');


  }


  onChartInit(echarts: any) {
    let baseImg = "https://a1115040996.github.io/MyHTML/echarts/img/data-1571295640429-3Co5rpLX.png";

/*    echarts.setOption({
      // backgroundColor: '#000',
      globe: {
        baseTexture: baseImg,
        displacementScale: 0.05,
        displacementQuality: 'high',
        shading: 'realistic',
        realisticMaterial: {
          roughness: 0.2,
          metalness: 0
        },

        postEffect: {
          enable: true,
          depthOfField: {
            // enable: true
          }
        },
        light: {
          ambient: {
            intensity: 1
          },
          main: { // 主光源
            intensity: 0,
            shadow: false
          },
          /!*ambientCubemap: {
              texture: ROOT_PATH + 'data-gl/asset/lake.hdr',
              exposure: 1,
              diffuseIntensity: 0.5,
              specularIntensity: 2
          }*!/
        },
        viewControl: {
          center: [0, 0, 0],
          alpha: 30,
          beta: 160,
          autoRotate: false,
          autoRotateAfterStill: 10,
          distance: 240,
          autoRotateSpeed: 4
        },
        // layers: [{
        //     type: 'blend',
        //     blendTo: 'emission',
        //     texture: contourChart,
        //     intensity: config.intensity
        // }]
      },
      series: [{
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
          color: 'rgb(50, 50, 150)',
          opacity: 0.2
        },
        data: [[4.674946, -74.050584], [5.630710, -64.491495]]
      }]
    })*/;
  }


}
