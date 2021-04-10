<template>
  <div>
    <figure className="highcharts-figure">
      <div id="container"></div>
    </figure>
  </div>
</template>

<script>
// import Highchart from 'highcharts/highcharts.js'


export default {
  name: "SightsMap",
  data() {
    return {
      data: undefined,
      input: undefined
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      // this.data = []
      // this.data.januar = 20
      this.basicChart()
    },
    basicChart() {
      // Highchart.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json', function (data) {

      var Highcharts = require('highcharts/highmaps.js'),
          map = require('@highcharts/map-collection/custom/world.geo.json');
      // eslint-disable-next-line no-unused-vars
      const getCountryISO3 = require("country-iso-2-to-3");


      this.data = [
        {
          "code3": "AW",
          "z": 105,
          "code": "AW"
        },
        {
          "code3": "AF",
          "z": 34656,
          "code": "AF"
        },
        {
          "code3": "AO",
          "z": 28813,
          "code": "AO"
        },
        {
          "code3": "AL",
          "z": 2876,
          "code": "AL"
        },
        {
          "code3": "AD",
          "z": 77,
          "code": "AD"
        },
        {
          "code3": "AE",
          "z": 9270,
          "code": "AE"
        },
        {
          "code3": "AR",
          "z": 43847,
          "code": "AR"
        },
        {
          "code3": "AM",
          "z": 2925,
          "code": "AM"
        },
        {
          "code3": "AS",
          "z": 56,
          "code": "AS"
        },
        {
          "code3": "AG",
          "z": 101,
          "code": "AG"
        },
        {
          "code3": "AU",
          "z": 24211,
          "code": "AU"
        },
        {
          "code3": "AT",
          "z": 8731,
          "code": "AT"
        },
        {
          "code3": "AZ",
          "z": 9758,
          "code": "AZ"
        },
        {
          "code3": "BI",
          "z": 10524,
          "code": "BI"
        },
        {
          "code3": "BE",
          "z": 11338,
          "code": "BE"
        },
        {
          "code3": "BJ",
          "z": 10872,
          "code": "BJ"
        },
        {
          "code3": "BF",
          "z": 18646,
          "code": "BF"
        },
        {
          "code3": "BD",
          "z": 162952,
          "code": "BD"
        },
        {
          "code3": "BG",
          "z": 7128,
          "code": "BG"
        },
        {
          "code3": "BH",
          "z": 1425,
          "code": "BH"
        },
        {
          "code3": "BS",
          "z": 391,
          "code": "BS"
        },
        {
          "code3": "BA",
          "z": 3517,
          "code": "BA"
        },
        {
          "code3": "BY",
          "z": 9502,
          "code": "BY"
        },
        {
          "code3": "BZ",
          "z": 367,
          "code": "BZ"
        },
        {
          "code3": "BM",
          "z": 65,
          "code": "BM"
        },
        {
          "code3": "BO",
          "z": 10888,
          "code": "BO"
        },
        {
          "code3": "BR",
          "z": 207653,
          "code": "BR"
        },
        {
          "code3": "BB",
          "z": 285,
          "code": "BB"
        },
        {
          "code3": "BN",
          "z": 423,
          "code": "BN"
        },
        {
          "code3": "BT",
          "z": 798,
          "code": "BT"
        },
        {
          "code3": "BW",
          "z": 2250,
          "code": "BW"
        },
        {
          "code3": "CF",
          "z": 4595,
          "code": "CF"
        },
        {
          "code3": "CA",
          "z": 36265,
          "code": "CA"
        },
        {
          "code3": "CH",
          "z": 8372,
          "code": "CH"
        },
        {
          "code3": "CL",
          "z": 17910,
          "code": "CL"
        },
        {
          "code3": "CN",
          "z": 1378665,
          "code": "CN"
        },
        {
          "code3": "CI",
          "z": 23696,
          "code": "CI"
        },
        {
          "code3": "CM",
          "z": 23439,
          "code": "CM"
        },
        {
          "code3": "CD",
          "z": 78736,
          "code": "CD"
        },
        {
          "code3": "CG",
          "z": 5126,
          "code": "CG"
        },
        {
          "code3": "CO",
          "z": 48653,
          "code": "CO"
        },
        {
          "code3": "KM",
          "z": 796,
          "code": "KM"
        },
        {
          "code3": "CV",
          "z": 540,
          "code": "CV"
        },
        {
          "code3": "CR",
          "z": 4857,
          "code": "CR"
        },
        {
          "code3": "CU",
          "z": 11476,
          "code": "CU"
        },
        {
          "code3": "CW",
          "z": 160,
          "code": "CW"
        },
        {
          "code3": "KY",
          "z": 61,
          "code": "KY"
        },
        {
          "code3": "CY",
          "z": 1170,
          "code": "CY"
        },
        {
          "code3": "CZ",
          "z": 10566,
          "code": "CZ"
        },
        {
          "code3": "DE",
          "z": 82488,
          "code": "DE"
        },
        {
          "code3": "DJ",
          "z": 942,
          "code": "DJ"
        },
        {
          "code3": "DM",
          "z": 74,
          "code": "DM"
        },
        {
          "code3": "DK",
          "z": 5728,
          "code": "DK"
        },
        {
          "code3": "DO",
          "z": 10649,
          "code": "DO"
        },
        {
          "code3": "DZ",
          "z": 40606,
          "code": "DZ"
        },
        {
          "code3": "EC",
          "z": 16385,
          "code": "EC"
        },
        {
          "code3": "EG",
          "z": 95689,
          "code": "EG"
        },
        {
          "code3": "ER",
          "z": 4475,
          "code": "ER"
        },
        {
          "code3": "ES",
          "z": 46485,
          "code": "ES"
        },
        {
          "code3": "EE",
          "z": 1316,
          "code": "EE"
        },
        {
          "code3": "ET",
          "z": 102403,
          "code": "ET"
        },
        {
          "code3": "FI",
          "z": 5495,
          "code": "FI"
        },
        {
          "code3": "FJ",
          "z": 899,
          "code": "FJ"
        },
        {
          "code3": "FR",
          "z": 66892,
          "code": "FR"
        },
        {
          "code3": "FO",
          "z": 49,
          "code": "FO"
        },
        {
          "code3": "FM",
          "z": 105,
          "code": "FM"
        },
        {
          "code3": "GA",
          "z": 1980,
          "code": "GA"
        },
        {
          "code3": "GB",
          "z": 65596,
          "code": "GB"
        },
        {
          "code3": "GE",
          "z": 3719,
          "code": "GE"
        },
        {
          "code3": "GH",
          "z": 28207,
          "code": "GH"
        },
        {
          "code3": "GI",
          "z": 34,
          "code": "GI"
        },
        {
          "code3": "GN",
          "z": 12396,
          "code": "GN"
        },
        {
          "code3": "GM",
          "z": 2039,
          "code": "GM"
        },
        {
          "code3": "GW",
          "z": 1816,
          "code": "GW"
        },
        {
          "code3": "GQ",
          "z": 1221,
          "code": "GQ"
        },
        {
          "code3": "GR",
          "z": 10771,
          "code": "GR"
        },
        {
          "code3": "GD",
          "z": 107,
          "code": "GD"
        },
        {
          "code3": "GL",
          "z": 56,
          "code": "GL"
        },
        {
          "code3": "GT",
          "z": 16582,
          "code": "GT"
        },
        {
          "code3": "GU",
          "z": 163,
          "code": "GU"
        },
        {
          "code3": "GY",
          "z": 773,
          "code": "GY"
        },
        {
          "code3": "HK",
          "z": 7337,
          "code": "HK"
        },
        {
          "code3": "HN",
          "z": 9113,
          "code": "HN"
        },
        {
          "code3": "HR",
          "z": 4174,
          "code": "HR"
        },
        {
          "code3": "HT",
          "z": 10847,
          "code": "HT"
        },
        {
          "code3": "HU",
          "z": 9814,
          "code": "HU"
        },
        {
          "code3": "ID",
          "z": 261115,
          "code": "ID"
        },
        {
          "code3": "IM",
          "z": 84,
          "code": "IM"
        },
        {
          "code3": "IN",
          "z": 1324171,
          "code": "IN"
        },
        {
          "code3": "IE",
          "z": 4750,
          "code": "IE"
        },
        {
          "code3": "IR",
          "z": 80277,
          "code": "IR"
        },
        {
          "code3": "IQ",
          "z": 37203,
          "code": "IQ"
        },
        {
          "code3": "IS",
          "z": 335,
          "code": "IS"
        },
        {
          "code3": "IL",
          "z": 8546,
          "code": "IL"
        },
        {
          "code3": "IT",
          "z": 60627,
          "code": "IT"
        },
        {
          "code3": "JM",
          "z": 2881,
          "code": "JM"
        },
        {
          "code3": "JO",
          "z": 9456,
          "code": "JO"
        },
        {
          "code3": "JP",
          "z": 126995,
          "code": "JP"
        },
        {
          "code3": "KZ",
          "z": 17794,
          "code": "KZ"
        },
        {
          "code3": "KE",
          "z": 48462,
          "code": "KE"
        },
        {
          "code3": "KG",
          "z": 6080,
          "code": "KG"
        },
        {
          "code3": "KH",
          "z": 15762,
          "code": "KH"
        },
        {
          "code3": "KI",
          "z": 114,
          "code": "KI"
        },
        {
          "code3": "KN",
          "z": 55,
          "code": "KN"
        },
        {
          "code3": "KR",
          "z": 51246,
          "code": "KR"
        },
        {
          "code3": "KW",
          "z": 4053,
          "code": "KW"
        },
        {
          "code3": "LA",
          "z": 6758,
          "code": "LA"
        },
        {
          "code3": "LB",
          "z": 6007,
          "code": "LB"
        },
        {
          "code3": "LR",
          "z": 4614,
          "code": "LR"
        },
        {
          "code3": "LY",
          "z": 6293,
          "code": "LY"
        },
        {
          "code3": "LC",
          "z": 178,
          "code": "LC"
        },
        {
          "code3": "LI",
          "z": 38,
          "code": "LI"
        },
        {
          "code3": "LK",
          "z": 21203,
          "code": "LK"
        },
        {
          "code3": "LS",
          "z": 2204,
          "code": "LS"
        },
        {
          "code3": "LT",
          "z": 2868,
          "code": "LT"
        },
        {
          "code3": "LU",
          "z": 582,
          "code": "LU"
        },
        {
          "code3": "LV",
          "z": 1960,
          "code": "LV"
        },
        {
          "code3": "MO",
          "z": 612,
          "code": "MO"
        },
        {
          "code3": "MF",
          "z": 32,
          "code": "MF"
        },
        {
          "code3": "MA",
          "z": 35277,
          "code": "MA"
        },
        {
          "code3": "MC",
          "z": 38,
          "code": "MC"
        },
        {
          "code3": "MD",
          "z": 3552,
          "code": "MD"
        },
        {
          "code3": "MG",
          "z": 24895,
          "code": "MG"
        },
        {
          "code3": "MV",
          "z": 428,
          "code": "MV"
        },
        {
          "code3": "MX",
          "z": 127540,
          "code": "MX"
        },
        {
          "code3": "MH",
          "z": 53,
          "code": "MH"
        },
        {
          "code3": "MK",
          "z": 2081,
          "code": "MK"
        },
        {
          "code3": "ML",
          "z": 17995,
          "code": "ML"
        },
        {
          "code3": "MT",
          "z": 437,
          "code": "MT"
        },
        {
          "code3": "MM",
          "z": 52885,
          "code": "MM"
        },
        {
          "code3": "ME",
          "z": 622,
          "code": "ME"
        },
        {
          "code3": "MN",
          "z": 3027,
          "code": "MN"
        },
        {
          "code3": "MP",
          "z": 55,
          "code": "MP"
        },
        {
          "code3": "MZ",
          "z": 28829,
          "code": "MZ"
        },
        {
          "code3": "MR",
          "z": 4301,
          "code": "MR"
        },
        {
          "code3": "MU",
          "z": 1263,
          "code": "MU"
        },
        {
          "code3": "MW",
          "z": 18092,
          "code": "MW"
        },
        {
          "code3": "MY",
          "z": 31187,
          "code": "MY"
        },
        {
          "code3": "NA",
          "z": 2480,
          "code": "NA"
        },
        {
          "code3": "NC",
          "z": 277,
          "code": "NC"
        },
        {
          "code3": "NE",
          "z": 20673,
          "code": "NE"
        },
        {
          "code3": "NG",
          "z": 185990,
          "code": "NG"
        },
        {
          "code3": "NI",
          "z": 6150,
          "code": "NI"
        },
        {
          "code3": "NL",
          "z": 17030,
          "code": "NL"
        },
        {
          "code3": "NO",
          "z": 5236,
          "code": "NO"
        },
        {
          "code3": "NP",
          "z": 28983,
          "code": "NP"
        },
        {
          "code3": "NR",
          "z": 13,
          "code": "NR"
        },
        {
          "code3": "NZ",
          "z": 4693,
          "code": "NZ"
        },
        {
          "code3": "OM",
          "z": 4425,
          "code": "OM"
        },
        {
          "code3": "PK",
          "z": 193203,
          "code": "PK"
        },
        {
          "code3": "PA",
          "z": 4034,
          "code": "PA"
        },
        {
          "code3": "PE",
          "z": 31774,
          "code": "PE"
        },
        {
          "code3": "PH",
          "z": 103320,
          "code": "PH"
        },
        {
          "code3": "PW",
          "z": 22,
          "code": "PW"
        },
        {
          "code3": "PG",
          "z": 8085,
          "code": "PG"
        },
        {
          "code3": "PL",
          "z": 37970,
          "code": "PL"
        },
        {
          "code3": "PR",
          "z": 3411,
          "code": "PR"
        },
        {
          "code3": "KP",
          "z": 25369,
          "code": "KP"
        },
        {
          "code3": "PT",
          "z": 10325,
          "code": "PT"
        },
        {
          "code3": "PY",
          "z": 6725,
          "code": "PY"
        },
        {
          "code3": "PS",
          "z": 4552,
          "code": "PS"
        },
        {
          "code3": "PF",
          "z": 280,
          "code": "PF"
        },
        {
          "code3": "QA",
          "z": 2570,
          "code": "QA"
        },
        {
          "code3": "RO",
          "z": 19699,
          "code": "RO"
        },
        {
          "code3": "RU",
          "z": 144342,
          "code": "RU"
        },
        {
          "code3": "RW",
          "z": 11918,
          "code": "RW"
        },
        {
          "code3": "SA",
          "z": 32276,
          "code": "SA"
        },
        {
          "code3": "SD",
          "z": 39579,
          "code": "SD"
        },
        {
          "code3": "SN",
          "z": 15412,
          "code": "SN"
        },
        {
          "code3": "SG",
          "z": 5607,
          "code": "SG"
        },
        {
          "code3": "SB",
          "z": 599,
          "code": "SB"
        },
        {
          "code3": "SL",
          "z": 7396,
          "code": "SL"
        },
        {
          "code3": "SV",
          "z": 6345,
          "code": "SV"
        },
        {
          "code3": "SM",
          "z": 33,
          "code": "SM"
        },
        {
          "code3": "SO",
          "z": 14318,
          "code": "SO"
        },
        {
          "code3": "RS",
          "z": 7058,
          "code": "RS"
        },
        {
          "code3": "SS",
          "z": 12231,
          "code": "SS"
        },
        {
          "code3": "ST",
          "z": 200,
          "code": "ST"
        },
        {
          "code3": "SR",
          "z": 558,
          "code": "SR"
        },
        {
          "code3": "SK",
          "z": 5431,
          "code": "SK"
        },
        {
          "code3": "SI",
          "z": 2065,
          "code": "SI"
        },
        {
          "code3": "SE",
          "z": 9923,
          "code": "SE"
        },
        {
          "code3": "SZ",
          "z": 1343,
          "code": "SZ"
        },
        {
          "code3": "SX",
          "z": 40,
          "code": "SX"
        },
        {
          "code3": "SC",
          "z": 95,
          "code": "SC"
        },
        {
          "code3": "SY",
          "z": 18430,
          "code": "SY"
        },
        {
          "code3": "TC",
          "z": 35,
          "code": "TC"
        },
        {
          "code3": "TD",
          "z": 14453,
          "code": "TD"
        },
        {
          "code3": "TG",
          "z": 7606,
          "code": "TG"
        },
        {
          "code3": "TH",
          "z": 68864,
          "code": "TH"
        },
        {
          "code3": "TJ",
          "z": 8735,
          "code": "TJ"
        },
        {
          "code3": "TM",
          "z": 5663,
          "code": "TM"
        },
        {
          "code3": "TL",
          "z": 1269,
          "code": "TL"
        },
        {
          "code3": "TO",
          "z": 107,
          "code": "TO"
        },
        {
          "code3": "TT",
          "z": 1365,
          "code": "TT"
        },
        {
          "code3": "TN",
          "z": 11403,
          "code": "TN"
        },
        {
          "code3": "TR",
          "z": 79512,
          "code": "TR"
        },
        {
          "code3": "TV",
          "z": 11,
          "code": "TV"
        },
        {
          "code3": "TZ",
          "z": 55572,
          "code": "TZ"
        },
        {
          "code3": "UG",
          "z": 41488,
          "code": "UG"
        },
        {
          "code3": "UA",
          "z": 45005,
          "code": "UA"
        },
        {
          "code3": "UY",
          "z": 3444,
          "code": "UY"
        },
        {
          "code3": "US",
          "z": 323128,
          "code": "US"
        },
        {
          "code3": "UZ",
          "z": 31848,
          "code": "UZ"
        },
        {
          "code3": "VC",
          "z": 110,
          "code": "VC"
        },
        {
          "code3": "VE",
          "z": 31568,
          "code": "VE"
        },
        {
          "code3": "VG",
          "z": 31,
          "code": "VG"
        },
        {
          "code3": "VI",
          "z": 108,
          "code": "VI"
        },
        {
          "code3": "VN",
          "z": 94569,
          "code": "VN"
        },
        {
          "code3": "VU",
          "z": 270,
          "code": "VU"
        },
        {
          "code3": "WS",
          "z": 195,
          "code": "WS"
        },
        {
          "code3": "YE",
          "z": 27584,
          "code": "YE"
        },
        {
          "code3": "ZA",
          "z": 56015,
          "code": "ZA"
        },
        {
          "code3": "ZM",
          "z": 16591,
          "code": "ZM"
        },
        {
          "code3": "ZW",
          "z": 16150,
          "code": "ZW"
        }
      ]

      // this.data = [
      //   {
      //     "code3": "ABW",
      //     "z": 105,
      //     "code": "AW"
      //   },
      //   {
      //     "code3": "AFG",
      //     "z": 34656,
      //     "code": "AF"
      //   },
      //   {
      //     "code3": "AGO",
      //     "z": 28813,
      //     "code": "AO"
      //   },
      //   {
      //     "code3": "ALB",
      //     "z": 2876,
      //     "code": "AL"
      //   },
      //   {
      //     "code3": "AND",
      //     "z": 77,
      //     "code": "AD"
      //   },
      //   {
      //     "code3": "ARE",
      //     "z": 9270,
      //     "code": "AE"
      //   },
      //   {
      //     "code3": "ARG",
      //     "z": 43847,
      //     "code": "AR"
      //   },
      //   {
      //     "code3": "ARM",
      //     "z": 2925,
      //     "code": "AM"
      //   },
      //   {
      //     "code3": "ASM",
      //     "z": 56,
      //     "code": "AS"
      //   },
      //   {
      //     "code3": "ATG",
      //     "z": 101,
      //     "code": "AG"
      //   },
      //   {
      //     "code3": "AUS",
      //     "z": 24211,
      //     "code": "AU"
      //   },
      //   {
      //     "code3": "AUT",
      //     "z": 8731,
      //     "code": "AT"
      //   },
      //   {
      //     "code3": "AZE",
      //     "z": 9758,
      //     "code": "AZ"
      //   },
      //   {
      //     "code3": "BDI",
      //     "z": 10524,
      //     "code": "BI"
      //   },
      //   {
      //     "code3": "BEL",
      //     "z": 11338,
      //     "code": "BE"
      //   },
      //   {
      //     "code3": "BEN",
      //     "z": 10872,
      //     "code": "BJ"
      //   },
      //   {
      //     "code3": "BFA",
      //     "z": 18646,
      //     "code": "BF"
      //   },
      //   {
      //     "code3": "BGD",
      //     "z": 162952,
      //     "code": "BD"
      //   },
      //   {
      //     "code3": "BGR",
      //     "z": 7128,
      //     "code": "BG"
      //   },
      //   {
      //     "code3": "BHR",
      //     "z": 1425,
      //     "code": "BH"
      //   },
      //   {
      //     "code3": "BHS",
      //     "z": 391,
      //     "code": "BS"
      //   },
      //   {
      //     "code3": "BIH",
      //     "z": 3517,
      //     "code": "BA"
      //   },
      //   {
      //     "code3": "BLR",
      //     "z": 9502,
      //     "code": "BY"
      //   },
      //   {
      //     "code3": "BLZ",
      //     "z": 367,
      //     "code": "BZ"
      //   },
      //   {
      //     "code3": "BMU",
      //     "z": 65,
      //     "code": "BM"
      //   },
      //   {
      //     "code3": "BOL",
      //     "z": 10888,
      //     "code": "BO"
      //   },
      //   {
      //     "code3": "BRA",
      //     "z": 207653,
      //     "code": "BR"
      //   },
      //   {
      //     "code3": "BRB",
      //     "z": 285,
      //     "code": "BB"
      //   },
      //   {
      //     "code3": "BRN",
      //     "z": 423,
      //     "code": "BN"
      //   },
      //   {
      //     "code3": "BTN",
      //     "z": 798,
      //     "code": "BT"
      //   },
      //   {
      //     "code3": "BWA",
      //     "z": 2250,
      //     "code": "BW"
      //   },
      //   {
      //     "code3": "CAF",
      //     "z": 4595,
      //     "code": "CF"
      //   },
      //   {
      //     "code3": "CAN",
      //     "z": 36265,
      //     "code": "CA"
      //   },
      //   {
      //     "code3": "CHE",
      //     "z": 8372,
      //     "code": "CH"
      //   },
      //   {
      //     "code3": "CHL",
      //     "z": 17910,
      //     "code": "CL"
      //   },
      //   {
      //     "code3": "CHN",
      //     "z": 1378665,
      //     "code": "CN"
      //   },
      //   {
      //     "code3": "CIV",
      //     "z": 23696,
      //     "code": "CI"
      //   },
      //   {
      //     "code3": "CMR",
      //     "z": 23439,
      //     "code": "CM"
      //   },
      //   {
      //     "code3": "COD",
      //     "z": 78736,
      //     "code": "CD"
      //   },
      //   {
      //     "code3": "COG",
      //     "z": 5126,
      //     "code": "CG"
      //   },
      //   {
      //     "code3": "COL",
      //     "z": 48653,
      //     "code": "CO"
      //   },
      //   {
      //     "code3": "COM",
      //     "z": 796,
      //     "code": "KM"
      //   },
      //   {
      //     "code3": "CPV",
      //     "z": 540,
      //     "code": "CV"
      //   },
      //   {
      //     "code3": "CRI",
      //     "z": 4857,
      //     "code": "CR"
      //   },
      //   {
      //     "code3": "CUB",
      //     "z": 11476,
      //     "code": "CU"
      //   },
      //   {
      //     "code3": "CUW",
      //     "z": 160,
      //     "code": "CW"
      //   },
      //   {
      //     "code3": "CYM",
      //     "z": 61,
      //     "code": "KY"
      //   },
      //   {
      //     "code3": "CYP",
      //     "z": 1170,
      //     "code": "CY"
      //   },
      //   {
      //     "code3": "CZE",
      //     "z": 10566,
      //     "code": "CZ"
      //   },
      //   {
      //     "code3": "DEU",
      //     "z": 82488,
      //     "code": "DE"
      //   },
      //   {
      //     "code3": "DJI",
      //     "z": 942,
      //     "code": "DJ"
      //   },
      //   {
      //     "code3": "DMA",
      //     "z": 74,
      //     "code": "DM"
      //   },
      //   {
      //     "code3": "DNK",
      //     "z": 5728,
      //     "code": "DK"
      //   },
      //   {
      //     "code3": "DOM",
      //     "z": 10649,
      //     "code": "DO"
      //   },
      //   {
      //     "code3": "DZA",
      //     "z": 40606,
      //     "code": "DZ"
      //   },
      //   {
      //     "code3": "ECU",
      //     "z": 16385,
      //     "code": "EC"
      //   },
      //   {
      //     "code3": "EGY",
      //     "z": 95689,
      //     "code": "EG"
      //   },
      //   {
      //     "code3": "ERI",
      //     "z": 4475,
      //     "code": "ER"
      //   },
      //   {
      //     "code3": "ESP",
      //     "z": 46485,
      //     "code": "ES"
      //   },
      //   {
      //     "code3": "EST",
      //     "z": 1316,
      //     "code": "EE"
      //   },
      //   {
      //     "code3": "ETH",
      //     "z": 102403,
      //     "code": "ET"
      //   },
      //   {
      //     "code3": "FIN",
      //     "z": 5495,
      //     "code": "FI"
      //   },
      //   {
      //     "code3": "FJI",
      //     "z": 899,
      //     "code": "FJ"
      //   },
      //   {
      //     "code3": "FRA",
      //     "z": 66892,
      //     "code": "FR"
      //   },
      //   {
      //     "code3": "FRO",
      //     "z": 49,
      //     "code": "FO"
      //   },
      //   {
      //     "code3": "FSM",
      //     "z": 105,
      //     "code": "FM"
      //   },
      //   {
      //     "code3": "GAB",
      //     "z": 1980,
      //     "code": "GA"
      //   },
      //   {
      //     "code3": "GBR",
      //     "z": 65596,
      //     "code": "GB"
      //   },
      //   {
      //     "code3": "GEO",
      //     "z": 3719,
      //     "code": "GE"
      //   },
      //   {
      //     "code3": "GHA",
      //     "z": 28207,
      //     "code": "GH"
      //   },
      //   {
      //     "code3": "GIB",
      //     "z": 34,
      //     "code": "GI"
      //   },
      //   {
      //     "code3": "GIN",
      //     "z": 12396,
      //     "code": "GN"
      //   },
      //   {
      //     "code3": "GMB",
      //     "z": 2039,
      //     "code": "GM"
      //   },
      //   {
      //     "code3": "GNB",
      //     "z": 1816,
      //     "code": "GW"
      //   },
      //   {
      //     "code3": "GNQ",
      //     "z": 1221,
      //     "code": "GQ"
      //   },
      //   {
      //     "code3": "GRC",
      //     "z": 10771,
      //     "code": "GR"
      //   },
      //   {
      //     "code3": "GRD",
      //     "z": 107,
      //     "code": "GD"
      //   },
      //   {
      //     "code3": "GRL",
      //     "z": 56,
      //     "code": "GL"
      //   },
      //   {
      //     "code3": "GTM",
      //     "z": 16582,
      //     "code": "GT"
      //   },
      //   {
      //     "code3": "GUM",
      //     "z": 163,
      //     "code": "GU"
      //   },
      //   {
      //     "code3": "GUY",
      //     "z": 773,
      //     "code": "GY"
      //   },
      //   {
      //     "code3": "HKG",
      //     "z": 7337,
      //     "code": "HK"
      //   },
      //   {
      //     "code3": "HND",
      //     "z": 9113,
      //     "code": "HN"
      //   },
      //   {
      //     "code3": "HRV",
      //     "z": 4174,
      //     "code": "HR"
      //   },
      //   {
      //     "code3": "HTI",
      //     "z": 10847,
      //     "code": "HT"
      //   },
      //   {
      //     "code3": "HUN",
      //     "z": 9814,
      //     "code": "HU"
      //   },
      //   {
      //     "code3": "IDN",
      //     "z": 261115,
      //     "code": "ID"
      //   },
      //   {
      //     "code3": "IMN",
      //     "z": 84,
      //     "code": "IM"
      //   },
      //   {
      //     "code3": "IND",
      //     "z": 1324171,
      //     "code": "IN"
      //   },
      //   {
      //     "code3": "IRL",
      //     "z": 4750,
      //     "code": "IE"
      //   },
      //   {
      //     "code3": "IRN",
      //     "z": 80277,
      //     "code": "IR"
      //   },
      //   {
      //     "code3": "IRQ",
      //     "z": 37203,
      //     "code": "IQ"
      //   },
      //   {
      //     "code3": "ISL",
      //     "z": 335,
      //     "code": "IS"
      //   },
      //   {
      //     "code3": "ISR",
      //     "z": 8546,
      //     "code": "IL"
      //   },
      //   {
      //     "code3": "ITA",
      //     "z": 60627,
      //     "code": "IT"
      //   },
      //   {
      //     "code3": "JAM",
      //     "z": 2881,
      //     "code": "JM"
      //   },
      //   {
      //     "code3": "JOR",
      //     "z": 9456,
      //     "code": "JO"
      //   },
      //   {
      //     "code3": "JPN",
      //     "z": 126995,
      //     "code": "JP"
      //   },
      //   {
      //     "code3": "KAZ",
      //     "z": 17794,
      //     "code": "KZ"
      //   },
      //   {
      //     "code3": "KEN",
      //     "z": 48462,
      //     "code": "KE"
      //   },
      //   {
      //     "code3": "KGZ",
      //     "z": 6080,
      //     "code": "KG"
      //   },
      //   {
      //     "code3": "KHM",
      //     "z": 15762,
      //     "code": "KH"
      //   },
      //   {
      //     "code3": "KIR",
      //     "z": 114,
      //     "code": "KI"
      //   },
      //   {
      //     "code3": "KNA",
      //     "z": 55,
      //     "code": "KN"
      //   },
      //   {
      //     "code3": "KOR",
      //     "z": 51246,
      //     "code": "KR"
      //   },
      //   {
      //     "code3": "KWT",
      //     "z": 4053,
      //     "code": "KW"
      //   },
      //   {
      //     "code3": "LAO",
      //     "z": 6758,
      //     "code": "LA"
      //   },
      //   {
      //     "code3": "LBN",
      //     "z": 6007,
      //     "code": "LB"
      //   },
      //   {
      //     "code3": "LBR",
      //     "z": 4614,
      //     "code": "LR"
      //   },
      //   {
      //     "code3": "LBY",
      //     "z": 6293,
      //     "code": "LY"
      //   },
      //   {
      //     "code3": "LCA",
      //     "z": 178,
      //     "code": "LC"
      //   },
      //   {
      //     "code3": "LIE",
      //     "z": 38,
      //     "code": "LI"
      //   },
      //   {
      //     "code3": "LKA",
      //     "z": 21203,
      //     "code": "LK"
      //   },
      //   {
      //     "code3": "LSO",
      //     "z": 2204,
      //     "code": "LS"
      //   },
      //   {
      //     "code3": "LTU",
      //     "z": 2868,
      //     "code": "LT"
      //   },
      //   {
      //     "code3": "LUX",
      //     "z": 582,
      //     "code": "LU"
      //   },
      //   {
      //     "code3": "LVA",
      //     "z": 1960,
      //     "code": "LV"
      //   },
      //   {
      //     "code3": "MAC",
      //     "z": 612,
      //     "code": "MO"
      //   },
      //   {
      //     "code3": "MAF",
      //     "z": 32,
      //     "code": "MF"
      //   },
      //   {
      //     "code3": "MAR",
      //     "z": 35277,
      //     "code": "MA"
      //   },
      //   {
      //     "code3": "MCO",
      //     "z": 38,
      //     "code": "MC"
      //   },
      //   {
      //     "code3": "MDA",
      //     "z": 3552,
      //     "code": "MD"
      //   },
      //   {
      //     "code3": "MDG",
      //     "z": 24895,
      //     "code": "MG"
      //   },
      //   {
      //     "code3": "MDV",
      //     "z": 428,
      //     "code": "MV"
      //   },
      //   {
      //     "code3": "MEX",
      //     "z": 127540,
      //     "code": "MX"
      //   },
      //   {
      //     "code3": "MHL",
      //     "z": 53,
      //     "code": "MH"
      //   },
      //   {
      //     "code3": "MKD",
      //     "z": 2081,
      //     "code": "MK"
      //   },
      //   {
      //     "code3": "MLI",
      //     "z": 17995,
      //     "code": "ML"
      //   },
      //   {
      //     "code3": "MLT",
      //     "z": 437,
      //     "code": "MT"
      //   },
      //   {
      //     "code3": "MMR",
      //     "z": 52885,
      //     "code": "MM"
      //   },
      //   {
      //     "code3": "MNE",
      //     "z": 622,
      //     "code": "ME"
      //   },
      //   {
      //     "code3": "MNG",
      //     "z": 3027,
      //     "code": "MN"
      //   },
      //   {
      //     "code3": "MNP",
      //     "z": 55,
      //     "code": "MP"
      //   },
      //   {
      //     "code3": "MOZ",
      //     "z": 28829,
      //     "code": "MZ"
      //   },
      //   {
      //     "code3": "MRT",
      //     "z": 4301,
      //     "code": "MR"
      //   },
      //   {
      //     "code3": "MUS",
      //     "z": 1263,
      //     "code": "MU"
      //   },
      //   {
      //     "code3": "MWI",
      //     "z": 18092,
      //     "code": "MW"
      //   },
      //   {
      //     "code3": "MYS",
      //     "z": 31187,
      //     "code": "MY"
      //   },
      //   {
      //     "code3": "NAM",
      //     "z": 2480,
      //     "code": "NA"
      //   },
      //   {
      //     "code3": "NCL",
      //     "z": 277,
      //     "code": "NC"
      //   },
      //   {
      //     "code3": "NER",
      //     "z": 20673,
      //     "code": "NE"
      //   },
      //   {
      //     "code3": "NGA",
      //     "z": 185990,
      //     "code": "NG"
      //   },
      //   {
      //     "code3": "NIC",
      //     "z": 6150,
      //     "code": "NI"
      //   },
      //   {
      //     "code3": "NLD",
      //     "z": 17030,
      //     "code": "NL"
      //   },
      //   {
      //     "code3": "NOR",
      //     "z": 5236,
      //     "code": "NO"
      //   },
      //   {
      //     "code3": "NPL",
      //     "z": 28983,
      //     "code": "NP"
      //   },
      //   {
      //     "code3": "NRU",
      //     "z": 13,
      //     "code": "NR"
      //   },
      //   {
      //     "code3": "NZL",
      //     "z": 4693,
      //     "code": "NZ"
      //   },
      //   {
      //     "code3": "OMN",
      //     "z": 4425,
      //     "code": "OM"
      //   },
      //   {
      //     "code3": "PAK",
      //     "z": 193203,
      //     "code": "PK"
      //   },
      //   {
      //     "code3": "PAN",
      //     "z": 4034,
      //     "code": "PA"
      //   },
      //   {
      //     "code3": "PER",
      //     "z": 31774,
      //     "code": "PE"
      //   },
      //   {
      //     "code3": "PHL",
      //     "z": 103320,
      //     "code": "PH"
      //   },
      //   {
      //     "code3": "PLW",
      //     "z": 22,
      //     "code": "PW"
      //   },
      //   {
      //     "code3": "PNG",
      //     "z": 8085,
      //     "code": "PG"
      //   },
      //   {
      //     "code3": "POL",
      //     "z": 37970,
      //     "code": "PL"
      //   },
      //   {
      //     "code3": "PRI",
      //     "z": 3411,
      //     "code": "PR"
      //   },
      //   {
      //     "code3": "PRK",
      //     "z": 25369,
      //     "code": "KP"
      //   },
      //   {
      //     "code3": "PRT",
      //     "z": 10325,
      //     "code": "PT"
      //   },
      //   {
      //     "code3": "PRY",
      //     "z": 6725,
      //     "code": "PY"
      //   },
      //   {
      //     "code3": "PSE",
      //     "z": 4552,
      //     "code": "PS"
      //   },
      //   {
      //     "code3": "PYF",
      //     "z": 280,
      //     "code": "PF"
      //   },
      //   {
      //     "code3": "QAT",
      //     "z": 2570,
      //     "code": "QA"
      //   },
      //   {
      //     "code3": "ROU",
      //     "z": 19699,
      //     "code": "RO"
      //   },
      //   {
      //     "code3": "RUS",
      //     "z": 144342,
      //     "code": "RU"
      //   },
      //   {
      //     "code3": "RWA",
      //     "z": 11918,
      //     "code": "RW"
      //   },
      //   {
      //     "code3": "SAU",
      //     "z": 32276,
      //     "code": "SA"
      //   },
      //   {
      //     "code3": "SDN",
      //     "z": 39579,
      //     "code": "SD"
      //   },
      //   {
      //     "code3": "SEN",
      //     "z": 15412,
      //     "code": "SN"
      //   },
      //   {
      //     "code3": "SGP",
      //     "z": 5607,
      //     "code": "SG"
      //   },
      //   {
      //     "code3": "SLB",
      //     "z": 599,
      //     "code": "SB"
      //   },
      //   {
      //     "code3": "SLE",
      //     "z": 7396,
      //     "code": "SL"
      //   },
      //   {
      //     "code3": "SLV",
      //     "z": 6345,
      //     "code": "SV"
      //   },
      //   {
      //     "code3": "SMR",
      //     "z": 33,
      //     "code": "SM"
      //   },
      //   {
      //     "code3": "SOM",
      //     "z": 14318,
      //     "code": "SO"
      //   },
      //   {
      //     "code3": "SRB",
      //     "z": 7058,
      //     "code": "RS"
      //   },
      //   {
      //     "code3": "SSD",
      //     "z": 12231,
      //     "code": "SS"
      //   },
      //   {
      //     "code3": "STP",
      //     "z": 200,
      //     "code": "ST"
      //   },
      //   {
      //     "code3": "SUR",
      //     "z": 558,
      //     "code": "SR"
      //   },
      //   {
      //     "code3": "SVK",
      //     "z": 5431,
      //     "code": "SK"
      //   },
      //   {
      //     "code3": "SVN",
      //     "z": 2065,
      //     "code": "SI"
      //   },
      //   {
      //     "code3": "SWE",
      //     "z": 9923,
      //     "code": "SE"
      //   },
      //   {
      //     "code3": "SWZ",
      //     "z": 1343,
      //     "code": "SZ"
      //   },
      //   {
      //     "code3": "SXM",
      //     "z": 40,
      //     "code": "SX"
      //   },
      //   {
      //     "code3": "SYC",
      //     "z": 95,
      //     "code": "SC"
      //   },
      //   {
      //     "code3": "SYR",
      //     "z": 18430,
      //     "code": "SY"
      //   },
      //   {
      //     "code3": "TCA",
      //     "z": 35,
      //     "code": "TC"
      //   },
      //   {
      //     "code3": "TCD",
      //     "z": 14453,
      //     "code": "TD"
      //   },
      //   {
      //     "code3": "TGO",
      //     "z": 7606,
      //     "code": "TG"
      //   },
      //   {
      //     "code3": "THA",
      //     "z": 68864,
      //     "code": "TH"
      //   },
      //   {
      //     "code3": "TJK",
      //     "z": 8735,
      //     "code": "TJ"
      //   },
      //   {
      //     "code3": "TKM",
      //     "z": 5663,
      //     "code": "TM"
      //   },
      //   {
      //     "code3": "TLS",
      //     "z": 1269,
      //     "code": "TL"
      //   },
      //   {
      //     "code3": "TON",
      //     "z": 107,
      //     "code": "TO"
      //   },
      //   {
      //     "code3": "TTO",
      //     "z": 1365,
      //     "code": "TT"
      //   },
      //   {
      //     "code3": "TUN",
      //     "z": 11403,
      //     "code": "TN"
      //   },
      //   {
      //     "code3": "TUR",
      //     "z": 79512,
      //     "code": "TR"
      //   },
      //   {
      //     "code3": "TUV",
      //     "z": 11,
      //     "code": "TV"
      //   },
      //   {
      //     "code3": "TZA",
      //     "z": 55572,
      //     "code": "TZ"
      //   },
      //   {
      //     "code3": "UGA",
      //     "z": 41488,
      //     "code": "UG"
      //   },
      //   {
      //     "code3": "UKR",
      //     "z": 45005,
      //     "code": "UA"
      //   },
      //   {
      //     "code3": "URY",
      //     "z": 3444,
      //     "code": "UY"
      //   },
      //   {
      //     "code3": "USA",
      //     "z": 323128,
      //     "code": "US"
      //   },
      //   {
      //     "code3": "UZB",
      //     "z": 31848,
      //     "code": "UZ"
      //   },
      //   {
      //     "code3": "VCT",
      //     "z": 110,
      //     "code": "VC"
      //   },
      //   {
      //     "code3": "VEN",
      //     "z": 31568,
      //     "code": "VE"
      //   },
      //   {
      //     "code3": "VGB",
      //     "z": 31,
      //     "code": "VG"
      //   },
      //   {
      //     "code3": "VIR",
      //     "z": 108,
      //     "code": "VI"
      //   },
      //   {
      //     "code3": "VNM",
      //     "z": 94569,
      //     "code": "VN"
      //   },
      //   {
      //     "code3": "VUT",
      //     "z": 270,
      //     "code": "VU"
      //   },
      //   {
      //     "code3": "WSM",
      //     "z": 195,
      //     "code": "WS"
      //   },
      //   {
      //     "code3": "YEM",
      //     "z": 27584,
      //     "code": "YE"
      //   },
      //   {
      //     "code3": "ZAF",
      //     "z": 56015,
      //     "code": "ZA"
      //   },
      //   {
      //     "code3": "ZMB",
      //     "z": 16591,
      //     "code": "ZM"
      //   },
      //   {
      //     "code3": "ZWE",
      //     "z": 16150,
      //     "code": "ZW"
      //   }
      // ]

      this.data.forEach(element =>
          element.code3 = getCountryISO3(element.code)
      0
    )
      ;

      Highcharts.mapChart('container', {
        chart: {
          borderWidth: 1,
          map: map
        },

        title: {
          text: 'World population 2013 by country'
        },

        subtitle: {
          text: 'Demo of Highcharts map with bubbles'
        },

        legend: {
          enabled: false
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        series: [{
          name: 'Countries',
          color: '#E0E0E0',
          enableMouseTracking: false
        }, {
          type: 'mapbubble',
          name: 'Population 2016',
          joinBy: ['iso-a3', 'code3'],
          data: this.data,
          minSize: 4,
          maxSize: '12%',
          tooltip: {
            pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
          }
        }]
      });
      // });
    }
  }
}
</script>
<style>
#container {
  height: 400px;
}

.highcharts-figure, .highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #EBEBEB;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>