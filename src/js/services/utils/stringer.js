class Stringer {
    insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
};

export default Stringer;