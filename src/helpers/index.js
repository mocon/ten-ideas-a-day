// Sort an object by propertyName, in ascending (true) or descending (false) order
export function sortByProperty(object, propertyName, sortAsc) {
    let arrayOfObjects = [];
    let sortedArray = [];

    Object.keys(object).forEach((key) => {
        const newObject = Object.assign({ id: key }, object[key]);
        arrayOfObjects.push(newObject);
    });

    sortedArray = arrayOfObjects.sort((a, b) => {
        if (sortAsc) {
            return a[propertyName] > b[propertyName];
        } else {
            return a[propertyName] < b[propertyName];
        }
    });

    return sortedArray;
}
