import Vue from 'vue'
import Vuex from 'vuex'
import mall from './mall.js'
import namespaced from './namespaced.js'
Vue.use(Vuex)

export default new Vuex.Store({
  //放置全局状态
  state: {
		username: '王晴',
		age: 22,
		list:[]
  },
  //修改数据或者状态的方法methods
  mutations: {
		addAge(state,payload){
			state.age+=payload;
		},
		getList(state,playload){
			state.list=playload
		}
  },
  //异步修改数据
  actions: {
		getJoke(context){
			let httpUrl = 'https://api.apiopen.top/getJoke?page=1&count=10&type=text';
			fetch(httpUrl).then((res)=>{
				return res.json()
			}).then((res)=>{
				console.log(res);
				context.commit('getList',res.result);
			})
		}
  },
  //vuex细分模块
  modules: {
		mall,
		namespaced
  },
  //计算属属性
  getters: {
		xuAge: function(state){
			return state.age+1
		}
  }
})
