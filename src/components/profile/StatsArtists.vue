<template>
    <v-expansion-panels multiple dark>
            <v-expansion-panel>
                <v-expansion-panel-header>Your Top Artists</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <apexchart :height="$vuetify.breakpoint.xs ? 350 : 600" width="100%" type="scatter" :options="chartOptionsScatter" :series="seriesScatter"></apexchart>
                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-expansion-panels>
</template>

<script>
import apexchart from 'vue-apexcharts';

export default {
    name: 'StatsArtists',
    components: {apexchart},
    props: {
        topArtists: Array,
    },
    data(){
        return{

            //chart 2
            seriesScatter: [{
            data: [[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
            }],
            chartOptionsScatter: {
                chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                    enabled: true,
                    type: 'xy'
                }
                },
                xaxis: {
                tickAmount: 10,
                labels: {
                    formatter: function(val) {
                    return parseFloat(val).toFixed(1)
                    }
                }
                },
                yaxis: {
                    tickAmount: 7
                },
                theme: {
                mode: 'dark', 
                palette: 'palette1', 
                monochrome: {
                    enabled: false,
                    color: '#255aee',
                    shadeTo: 'dark',
                    shadeIntensity: 0.90
                },
                }
            },
        }
    },
    methods: {
    },
    mounted(){

    }
}
</script>