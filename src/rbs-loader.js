import {convertFromRbsToJs} from 'rbs'

export default function (source) {
    const result = convertFromRbsToJs(source, this.sourceMap, this.resourcePath)
    if (!this.sourceMap) {
	return result.source
    } else {
	this.callback(null, result.source, result.sourceMap)
    }
}
