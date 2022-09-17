import { resolve } from "path"
import vm from 'vm-browserify'

module.exports = {
	resolve:{
		fallback:{ vm: require.resolve("vm-browserify") }
	}
}