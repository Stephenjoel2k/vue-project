//you need to import both vue and vuex, as both are used here
import Vue from "vue";
import Vuex from "vuex";
//then you use Vuex
Vue.use(Vuex);
 
//we add a state and a mutation
export default new Vuex.Store({
    state: {
      savedSelection: null,
      savedPreview: null,
      savedPreviewProgress: 0,
      savedTrack: null,
      savedSimilar: null,
    }, 
    mutations: {
        saveSelection: (state, selection) => {
            state.savedSelection = selection
        },
        saveSimilar: (state, similar) => {
            state.savedSimilar = similar
        },
        savePreview: (state, preview) => {
            state.savedPreview = preview
        },
        saveTrack: (state, track) => {
            state.savedTrack = track
        },
        savePreviewProgress: (state, previewProgress) => {
            state.savedPreviewProgress = previewProgress
        }
    }
  });
  