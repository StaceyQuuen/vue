export default {
	namespaced: true ,
	state: {
		lunname: "老陈论坛"
	},
	mutations: {
		setlunname: function(state,payload){
			state.lunname = payload
		}
	}
}