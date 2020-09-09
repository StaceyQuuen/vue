const path = require('path');
module.exports={
	entry: './js/index.js',
	output: {
		path: path.resolve(_dirname,'dist'),
		filename: 'my-first-webpack.bundle.js'
	}
}