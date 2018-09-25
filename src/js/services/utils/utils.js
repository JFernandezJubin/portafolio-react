import Stringer from './stringer';
class Utils {
    constructor () {
        this.stringer = new Stringer();
    }
    insert (str, index, value) { return this.stringer.insert(str, index, value); };
};

export default Utils;