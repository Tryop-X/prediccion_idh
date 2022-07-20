import { Component, OnInit } from '@angular/core';
import {CargarScriptService} from "./cargar-script.service";
import {PrediccionServiceService} from "./prediccion-service.service";


class Pais {
  constructor(id: number, s: string|number) {
    this.nombre = s+"";
    this.id =id;
  }

  id: number;
  nombre: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  indicadorPais = [
    [	'Afghanistan'	,	2015	,	4.08791	,	8.5	,	72.9	,	17.2	,	0.5	],
    [	'Albania'	,	2010	,	3.15719	,	6	,	1.6	,	32.2	,	0.745	],
    [	'Angola'	,	2010	,	2.28146	,	4.5	,	50.9	,	16.4	,	0.517	],
    [	'Argentina'	,	2015	,	4.98631	,	7.9	,	0.7	,	30.5	,	0.84	],
    [	'Armenia'	,	2015	,	3.14384	,	3.7	,	8	,	33.8	,	0.768	],
    [	'Azerbaijan'	,	2015	,	2.43564	,	5	,	0.1	,	30.3	,	0.744	],
    [	'Bangladesh'	,	2010	,	2.13129	,	3.4	,	55.5	,	24	,	0.557	],
    [	'Barbados'	,	2005	,	5.93509	,	6.7	,	0.5	,	35.5	,	0.787	],
    [	'Belarus'	,	2015	,	4.84382	,	4.9	,	0.3	,	39.5	,	0.814	],
    [	'Belize'	,	2005	,	5.79693	,	4.5	,	12.6	,	20.3	,	0.662	],
    [	'Benin'	,	2010	,	3.50328	,	4.8	,	72.3	,	17.9	,	0.494	],
    [	'Bhutan'	,	2015	,	4.65258	,	3.7	,	15.4	,	25.7	,	0.628	],
    [	'Brazil'	,	2015	,	5.73952	,	8.9	,	3	,	31.4	,	0.756	],
    [	'Brunei Darussalam'	,	2015	,	3.68108	,	2.2	,	0.2	,	29.9	,	0.838	],
    [	'Burkina Faso'	,	2015	,	4.48327	,	6.4	,	72.7	,	17	,	0.422	],
    [	'Burundi'	,	2015	,	5.99779	,	9	,	89.1	,	17.1	,	0.437	],
    [	'Cambodia'	,	2005	,	1.72403	,	6.2	,	84.3	,	20.4	,	0.494	],
    [	'Cameroon'	,	2015	,	3.0529	,	5.4	,	39.1	,	18.2	,	0.549	],
    [	'Central African Republic'	,	2015	,	1.22862	,	3.9	,	83.8	,	17.1	,	0.375	],
    [	'Chad'	,	2015	,	2.2579	,	2.8	,	63.1	,	16	,	0.398	],
    [	'Chile'	,	2015	,	4.0681	,	7.1	,	0.9	,	33.8	,	0.842	],
    [	'China'	,	2000	,	1.85964	,	3.8	,	65.5	,	30	,	0.588	],
    [	'Colombia'	,	2015	,	4.45981	,	6.5	,	7.1	,	29.5	,	0.756	],
    [	'Comoros'	,	2015	,	5.10933	,	3.6	,	31.2	,	19.7	,	0.545	],
    [	'Costa Rica'	,	2015	,	6.61588	,	10.2	,	1.6	,	31.2	,	0.797	],
    [	'Cuba'	,	2010	,	9.05729	,	7.7	,	1.3	,	38.4	,	0.781	],
    [	'Dominican Republic'	,	2005	,	2.0237	,	6.2	,	12.7	,	23.7	,	0.681	],
    [	'Ecuador'	,	2015	,	4.31455	,	6.9	,	8.3	,	26.5	,	0.764	],
    [	'Egypt'	,	2010	,	4.00178	,	5.2	,	20.1	,	23.7	,	0.668	],
    [	'El Salvador'	,	2015	,	3.41749	,	6.8	,	6.4	,	25.7	,	0.668	],
    [	'Eritrea'	,	2010	,	2.127	,	3.2	,	77.4	,	19.8	,	0.436	],
    [	'Ethiopia'	,	2015	,	5.48577	,	4.1	,	68.8	,	18.3	,	0.462	],
    [	'Fiji'	,	2015	,	4.17305	,	3.8	,	9.3	,	27	,	0.737	],
    [	'Gambia'	,	2015	,	3.89922	,	4.7	,	33.3	,	17.5	,	0.471	],
    [	'Georgia'	,	2015	,	2.69622	,	9.4	,	13.2	,	37.7	,	0.79	],
    [	'Ghana'	,	2015	,	8.14097	,	5.3	,	22.9	,	20.7	,	0.59	],
    [	'Guatemala'	,	2015	,	2.92014	,	6.7	,	15.6	,	21.3	,	0.652	],
    [	'Guinea'	,	2015	,	3.06284	,	6	,	68.8	,	17.1	,	0.457	],
    [	'Guinea-Bissau'	,	2015	,	1.84898	,	6.3	,	80.9	,	18.4	,	0.464	],
    [	'Guyana'	,	2015	,	3.59124	,	6.8	,	6.9	,	25	,	0.674	],
    [	'India'	,	2015	,	3.72321	,	3.9	,	51.9	,	26.8	,	0.624	],
    [	'Indonesia'	,	2015	,	3.18944	,	2.9	,	31.5	,	28.5	,	0.695	],
    [	'Jamaica'	,	2015	,	6.26768	,	5.2	,	3.9	,	29	,	0.731	],
    [	'Jordan'	,	2000	,	7.47599	,	8.9	,	9.9	,	19.6	,	0.711	],
    [	'Kazakhstan'	,	2010	,	2.62679	,	3.9	,	0.6	,	28.9	,	0.764	],
    [	'Kenya'	,	2010	,	7.04982	,	4.5	,	66.7	,	18.1	,	0.551	],
    [	'Kuwait'	,	2010	,	3.76001	,	2.3	,	0.4	,	29.5	,	0.788	],
    [	'Kyrgyzstan'	,	2015	,	6.79062	,	6.2	,	18.5	,	25.1	,	0.69	],
    [	'Lao Peoples Democratic Republic'	,	2010	,	2.95879	,	4.3	,	59.3	,	20.7	,	0.552	],
    [	'Lebanon'	,	2015	,	1.64626	,	7.4	,	0.3	,	27.6	,	0.744	],
    [	'Lesotho'	,	2010	,	13.85772	,	7.1	,	69.2	,	21.7	,	0.46	],
    [	'Madagascar'	,	2015	,	2.78112	,	4.1	,	87.5	,	18.7	,	0.522	],
    [	'Malawi'	,	2015	,	5.35337	,	8.3	,	88.3	,	17.2	,	0.468	],
    [	'Malaysia'	,	2015	,	5.76294	,	3.8	,	0.1	,	28.2	,	0.796	],
    [	'Maldives'	,	2015	,	5.99482	,	8.1	,	12.4	,	28.6	,	0.724	],
    [	'Mali'	,	2015	,	4.57596	,	6.8	,	76.6	,	16	,	0.417	],
    [	'Mauritania'	,	2015	,	3.07791	,	5.9	,	17.6	,	19.6	,	0.536	],
    [	'Mauritius'	,	2015	,	3.41084	,	5	,	0.7	,	35.6	,	0.789	],
    [	'Mexico'	,	2015	,	5.15425	,	6	,	10.7	,	27.7	,	0.766	],
    [	'Mongolia'	,	2015	,	4.60902	,	6	,	1.4	,	27.1	,	0.735	],
    [	'Mozambique'	,	2010	,	4.27428	,	6.5	,	86.9	,	17	,	0.401	],
    [	'Namibia'	,	2010	,	6.03782	,	7.2	,	32.6	,	20.5	,	0.589	],
    [	'Nepal'	,	2010	,	3.60536	,	5.6	,	46.3	,	21.7	,	0.537	],
    [	'Niger'	,	2015	,	4.20718	,	6.9	,	75.2	,	14.9	,	0.372	],
    [	'Oman'	,	2010	,	3.85934	,	2.3	,	0.2	,	26.2	,	0.782	],
    [	'Pakistan'	,	2015	,	2.22175	,	3	,	33.3	,	21.8	,	0.536	],
    [	'Panama'	,	2015	,	3.29343	,	7.9	,	3	,	28.4	,	0.799	],
    [	'Paraguay'	,	2015	,	4.96644	,	8.9	,	2.9	,	24.7	,	0.721	],
    [	'Peru'	,	2015	,	2.68161	,	4.7	,	11.8	,	27.5	,	0.759	],
    [	'Philippines'	,	2010	,	2.53381	,	4	,	33.1	,	23.1	,	0.671	],
    [	'Qatar'	,	2015	,	4.01224	,	1.9	,	0.1	,	31.5	,	0.839	],
    [	'Russian Federation'	,	2010	,	3.86626	,	5.3	,	0.2	,	38	,	0.781	],
    [	'Rwanda'	,	2015	,	4.71131	,	11	,	78.2	,	19.4	,	0.526	],
    [	'Saudi Arabia'	,	2010	,	5.89117	,	3.7	,	0.1	,	26	,	0.809	],
    [	'Senegal'	,	2010	,	4.77229	,	5.4	,	67.3	,	18	,	0.468	],
    [	'Serbia'	,	2015	,	4.49298	,	10.3	,	0.3	,	40.5	,	0.789	],
    [	'Sierra Leone'	,	2015	,	2.70754	,	16.3	,	78.4	,	18.7	,	0.431	],
    [	'Singapore'	,	2015	,	3.07419	,	4.2	,	0.1	,	39.7	,	0.931	],
    [	'South Africa'	,	2015	,	5.96275	,	8.7	,	17.9	,	26.4	,	0.701	],
    [	'Sri Lanka'	,	2015	,	1.80861	,	3.3	,	9.9	,	32.3	,	0.776	],
    [	'Sudan'	,	2010	,	1.96302	,	5	,	31.1	,	18.3	,	0.469	],
    [	'Syrian Arab Republic'	,	2010	,	5.34599	,	3.8	,	17.2	,	21.1	,	0.672	],
    [	'Tajikistan'	,	2015	,	3.93511	,	5.8	,	18.2	,	22	,	0.652	],
    [	'Thailand'	,	2015	,	4.80828	,	4.1	,	0.1	,	37.9	,	0.749	],
    [	'Timor-Leste'	,	2015	,	9.3384	,	4.7	,	64.6	,	19.6	,	0.61	],
    [	'Togo'	,	2015	,	4.43707	,	8	,	66.7	,	18.8	,	0.499	],
    [	'Trinidad and Tobago'	,	2005	,	3.0653	,	4.4	,	0.8	,	29.8	,	0.748	],
    [	'Tunisia'	,	2010	,	6.43859	,	5.6	,	3.8	,	29.3	,	0.716	],
    [	'Turkey'	,	2010	,	2.86247	,	5.8	,	2.1	,	28.3	,	0.739	],
    [	'Uganda'	,	2015	,	2.69587	,	9.3	,	68.7	,	15.9	,	0.525	],
    [	'Ukraine'	,	2015	,	6.16238	,	7.3	,	0.2	,	40	,	0.765	],
    [	'Uruguay'	,	2015	,	4.35527	,	8.6	,	0.2	,	35	,	0.806	],
    [	'Venezuela'	,	2010	,	3.66906	,	5.7	,	10.6	,	25.8	,	0.757	],
    [	'Yemen'	,	2005	,	9.24471	,	4.3	,	30.4	,	16.6	,	0.483	]
  ];
  pais: Pais[] = [];

  i_desarrollo: number;
  i_gastoEducaion:number;
  i_gastoSalud: number;
  i_pobreza: number;
  i_edadMedia: number;
  anio: number;

  pSelected : string;
  i_GE:number = 0;
  i_GS:number = 0;
  i_P = 0;
  i_EM = 0;
  i_agno: number;

  constructor(private cargarScript: CargarScriptService, private predict : PrediccionServiceService) {
    cargarScript.cargar(["cargarModelo"])
  }
  es_valido(){
    return this.i_pobreza == undefined;
  }

  setValores(){
    for(let i of this.indicadorPais){
      if( i[0] == this.pSelected){
        this.anio = Number(i[1]);
        this.i_agno = this.anio

        this.i_gastoEducaion = Number(i[2]);
        this.i_GE = this.i_gastoEducaion;

        this.i_gastoSalud = Number(i[3]);
        this.i_GS = this.i_gastoSalud;

        this.i_pobreza = Number(i[4]);
        this.i_P = this.i_pobreza;

        this.i_edadMedia = Number(i[5]);
        this.i_EM = this.i_edadMedia;

        this.i_desarrollo = Number(i[6]);
      }
    }
  }

  ngOnInit(): void {
    this.cargarPaisses();
  }

  cargarPaisses(){
    var n =0
    for(let i of this.indicadorPais){
      var ps = new Pais(n, i[0]);
      this.pais.push(ps)
    }
  }

  generarPrediccion(){
    this.i_agno = this.predict.getanio(this.i_agno);
    this.i_GE = this.predict.predictGE(this.i_GE);
    this.i_GS = this.predict.predictGS(this.i_GS);
    this.i_P = this.predict.predictPS(this.i_P);
    this.i_EM = this.predict.predictEM(this.i_EM);
  }


}
