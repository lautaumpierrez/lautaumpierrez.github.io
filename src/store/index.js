import Vue from 'vue';
import axios  from 'axios';
import Vuex from 'vuex';
Vue.use(Vuex);
var url = ['http://localhost:3000/send-message','https://lauta-watson.mybluemix.net/send-message']

export const store = new Vuex.Store({
  state:{
    ia:{
      active: false,
      messages:[],
    }
  },
  getters:{
    getIaState(state){
      return state.ia;
    }
  },
  actions:{
    toggleIA({commit}){
      commit('toggleIA');
    },
    addMessage({commit},{message, callback}){
      commit('addMessage', {text: message, both: false});
      callback();
      axios.get(url[1], {
        params:{
          text: message,
        }
      }).then((response)=>{
        console.log(response);
        if(response.data.output.generic[0].source)
          commit('addMessage', {text: response.data.output.generic[0].title,imageBin: true, both: true, image: response.data.output.generic[0].source});
        else
          commit('addMessage', {text: response.data.output.generic[0].text,both: true});
      });
    }
  },
  mutations:{
    addMessage(state, message){
      state.ia.messages.push(message);
      setTimeout(()=>document.getElementById('messagesScroll').scrollTop += 21312, 300);
    },
    toggleIA(state){
      state.ia.active = !state.ia.active;
    }
  }
});
