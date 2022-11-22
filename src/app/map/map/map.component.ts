import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import 'echarts-gl';
import * as echarts from 'echarts/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  options: EChartsOption = {
    backgroundColor: '#000',
    globe: {
      baseTexture: '/assets/earth.jpg',
      heightTexture: '/assets/starfield.jpg',
      shading: 'lambert',
      environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#00aaff' // Sky color
      }, {
        offset: 0.7, color: '#ff0000' // Ground color
      }, {
        offset: 1, color: '#998866' // Ground color
      }], false),
      atmosphere: {
        show: true
      },
      light: {
        ambient: {
          intensity: 0.1
        },
        main: {
          intensity: 1.5
        }
      }
    },
    series: [
      //@ts-ignore
      {
        //@ts-ignore
        type: 'lines3D',
        name: 'Mapa de ataques',
        effect: {
          show: true,
          period: 0.5,
          //@ts-ignore
          trailWidth: 10,
          trailColor: 'rgb(255, 0, 50)',
          trailOpacity: 0.5,

        },
        lineStyle: {
          width: 4,
          color: 'rgb(50, 50, 150)',
          opacity: 0.1
        },
        data: [
          [
            [-13.605225, 28.945464],
            [-74.089993, 4.685029]
          ]]
      }
    ]
  };


  constructor() { }

  ngOnInit(): void {
    var nuevosAtaques = [
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
      ], [[-9.546311, 30.381353], [-74.089993, 4.685029]], [[-9.546311, 30.381353], [5.090833, 45.726387]], [[-9.546311, 30.381353], [13.5225, 52.380001]], [[-4.499106, 36.6749], [-6.215833, 54.6575]], [[-4.499106, 36.6749], [-2.719089, 51.382669]], [[-4.499106, 36.6749], [7.529167, 47.59]], [[-4.499106, 36.6749], [2.55, 49.012779]], [[-4.499106, 36.6749], [-4.433056, 55.871944]], [[-4.499106, 36.6749], [6.10895, 46.238064]], [[-4.499106, 36.6749], [-74.089993, 4.685029]], [[-4.499106, 36.6749], [-2.849722, 53.333611]], [[-4.499106, 36.6749], [-0.368333, 51.874722]], [[-4.499106, 36.6749], [-2.27495, 53.353744]], [[-4.499106, 36.6749], [8.728111, 45.630606]], [[-4.499106, 36.6749], [-1.691667, 55.0375]], [[-4.499106, 36.6749], [0.695556, 51.571389]], [[-4.499106, 36.6749], [0.235, 51.885]], [[-4.499106, 36.6749], [13.5225, 52.380001]], [[8.290772, 40.632133], [8.728111, 45.630606]], [[8.802917, 41.923637], [7.529167, 47.59]], [[8.802917, 41.923637], [2.55, 49.012779]], [[8.802917, 41.923637], [6.10895, 46.238064]], [[8.802917, 41.923637], [-74.089993, 4.685029]], [[8.802917, 41.923637], [5.090833, 45.726387]], [[-0.558156, 38.282169], [-6.215833, 54.6575]], [[-0.558156, 38.282169], [-2.719089, 51.382669]], [[-0.558156, 38.282169], [7.529167, 47.59]], [[-0.558156, 38.282169], [-3.3725, 55.95]], [[-0.558156, 38.282169], [-4.433056, 55.871944]], [[-0.558156, 38.282169], [6.10895, 46.238064]], [[-0.558156, 38.282169], [-74.089993, 4.685029]], [[-0.558156, 38.282169], [-2.849722, 53.333611]], [[-0.558156, 38.282169], [-0.368333, 51.874722]], [[-0.558156, 38.282169], [-2.27495, 53.353744]]];

    nuevosAtaques.forEach((item, index)=> {
      setTimeout(() => {
        this.agregarAtaque(item);
      },500 * index )
    })
  }

  agregarAtaque(coordenadas: number[][] ){

    //@ts-ignore
    this.options.series.push(      {
        //@ts-ignore
        type: 'lines3D',
        name: 'Mapa de ataques',
        effect: {
          show: true,
          period: 0.5,
          //@ts-ignore
          trailWidth: 10,
          trailColor: 'rgb(255, 0, 50)',
          trailOpacity: 0.5,

        },
        lineStyle: {
          width: 4,
          color: 'rgb(50, 50, 150)',
          opacity: 0.1
        },
        data: [coordenadas]
      }
    )

  }

}
