<template>
    <v-expansion-panels multiple dark>
            <v-expansion-panel>
                <v-expansion-panel-header>Top Tracks Radar Map</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <apexchart :height="$vuetify.breakpoint.xs ? 350 : 600" width="100%" type="radar" :options="chartOptionsRadar" :series="seriesRadar"></apexchart>
                    <div class="text-left">
                        <h3>What do they mean?</h3>
                        <p>Acousticness: This value describes how acoustic a song is. A score of 1.0 means the song is most likely to be an acoustic one.</p>
                        <p>Instrumentalness: This value represents the amount of vocals in the song. The closer it is to 1.0, the more instrumental the song is.</p>
                        <p>Liveness: This value describes the probability that the song was recorded with a live audience. According to the official documentation “a value above 0.8 provides strong likelihood that the track is live”</p>
                        <p>Speechiness: “Speechiness detects the presence of spoken words in a track”. If the speechiness of a song is above 0.66, it is probably made of spoken words, a score between 0.33 and 0.66 is a song that may contain both music and words, and a score below 0.33 means the song does not have any speech.</p>
                        <p>Energy: “(energy) represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy”.</p>
                        <p>Danceability: “Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable”.</p>
                        <p>Valence: “A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)”.</p>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>Your Tracks Mood</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <apexchart :height="$vuetify.breakpoint.xs ? 350 : 600" width="100%" type="scatter" :options="chartOptionsScatter" :series="seriesScatter"></apexchart>
                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-expansion-panels>
</template>

<script>
import apexchart from 'vue-apexcharts';

export default {
    name: 'StatsTracks',
    components: {apexchart},
    props: {
        topTracks: Array,
    },
    data(){
        return{
            //chart 1
            seriesRadar: [],
            chartOptionsRadar: {
            chart: {
              height: 500,
              type: "radar",
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColor: '#e8e8e8',
                        fill: {
                            colors: ['#f8f8f8', '#fff']
                        }
                    }
                }
            },
            yaxis: {
                show: false,
                max: 1,
                min: 0
            },
            xaxis: {
              categories: ['Acousticness', 'Danceability', 'Instrumentalness', 'Energy', 'Speechiness'],
              labels: {
                show: true,
                style: {
                    colors: ["#a8a8a8"],
                    fontSize: this.$vuetify.breakpoint.xs ? "8px" : "15px",
                    fontFamily: 'Arial'
                    }
                }
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
        updateChart(){
            var tracks = this.topTracks;
            tracks.forEach(e => {
                var af = e.track.audio_features;
                var name = e.track.name;
                this.seriesRadar.push({name, "data": [af.acousticness, af.danceability, af.instrumentalness, af.energy, af.speechiness]})
            });
        },
    },
    mounted(){
        this.updateChart();
    }
}
</script>